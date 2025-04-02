import { BaseButton } from '@/components/shared/BaseButton';
import { BaseText } from '@/components/shared/BaseText';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <View className="nw-absolute-center">
      <BaseText className="nw-mb-[16] nw-text-center">
        This screen does not exist
      </BaseText>

      <BaseButton onPress={() => router.push('/')}>
        Go to home screen
      </BaseButton>
    </View>
  );
};
