import { BaseButton } from '@/components/shared/BaseButton';
import { useRouter, useSegments } from 'expo-router';

const NotFound: React.FC = () => {
  const router = useRouter();
  const segments = useSegments();

  const reloadCurrentScreen = () => {
    const fullPath = '/' + segments.join('/');
    const currentPath = fullPath as Parameters<typeof router.replace>[0] &
      typeof fullPath;

    router.replace(currentPath);
  };

  return (
    <div className="nw-flex-center nw-min-h-screen nw-bg-gray-50 nw-px-4">
      <div className="nw-max-w-md nw-rounded-2xl nw-border nw-border-gray-200 nw-bg-white nw-p-8 nw-shadow-md">
        <div className="nw-text-center">
          <svg
            className="nw-mx-auto nw-mb-4 nw-h-12 nw-w-12 nw-text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 9v3.75m0 3.75h.007M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="nw-mb-2 nw-text-xl nw-font-semibold nw-text-gray-800">
            Something went wrong
          </p>

          <p className="nw-mb-6 nw-text-gray-500">
            We’re sorry for the inconvenience. Please try again or go back.
          </p>

          <div className="nw-flex-center nw-gap-3">
            <BaseButton onPress={reloadCurrentScreen}>Try again</BaseButton>

            <BaseButton onPress={() => router.push('/home-tab')} type="default">
              Go back
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
