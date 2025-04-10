import { BaseButton } from '@/components/shared/BaseButton';
import { BaseText } from '@/components/shared/BaseText';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <View className="nw-absolute-center nw-flex-center nw-flex-col">
      <BaseText className="nw-mb-4" heading="h4">
        This screen does not exist
      </BaseText>
      <BaseButton onPress={() => router.push('/')}>
        Go to home screen
      </BaseButton>
    </View>
  );
};

export default NotFound;
