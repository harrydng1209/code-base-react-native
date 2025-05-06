import { ROUTE_GUARDS } from '@/constants/route-guards.const';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

interface IProps {
  fontError: boolean | Error | null;
  fontLoaded: boolean;
}

export const useAuthGuard = (props: IProps) => {
  const { fontError, fontLoaded } = props;

  const router = useRouter();
  const segments = useSegments();

  const [isReady, setIsReady] = useState(false);

  const isLoading = (!fontLoaded && !fontError) || !isReady;

  useEffect(() => {
    const guard = async () => {
      const fontsReady = fontLoaded || !!fontError;
      const pathname = segments.length > 0 ? segments.join('/') : '/';

      if (!fontsReady) {
        setIsReady(false);
        return;
      }

      if (ROUTE_GUARDS[pathname]?.requiresAuth ?? false) {
        await useAuthStore.getState().initialize();

        const isAuthenticated = useAuthStore.getState().isAuthenticated;
        const userRole = useAuthStore.getState().userInfo?.role;

        if (!isAuthenticated) {
          setIsReady(true);
          router.replace('/auth/login');
          return;
        }

        const requiresRoles = ROUTE_GUARDS[pathname].roles;
        const hasRequiredRole = requiresRoles?.some(
          (role) => role === userRole,
        );

        if (requiresRoles.length && !hasRequiredRole) {
          setIsReady(true);
          router.replace('/+not-found');
          return;
        }
      }
      setIsReady(true);
    };
    guard();
  }, [fontLoaded, fontError, segments, router]);

  return { isLoading };
};
