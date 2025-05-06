import { ERole } from '@/models/enums/auth.enum';

interface IRouteGuard {
  requiresAuth: boolean;
  roles: ERole[];
}

export const ROUTE_GUARDS: Record<string, IRouteGuard> = {
  '(tabs)/home-tab': {
    requiresAuth: true,
    roles: [ERole.Admin, ERole.Moderator, ERole.SuperAdmin, ERole.User],
  },
};
