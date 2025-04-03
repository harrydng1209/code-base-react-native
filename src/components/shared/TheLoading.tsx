import { COLORS } from '@/assets/styles/root/_variables.style';
import { useLoadingStore } from '@/stores/loading.store';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

export const TheLoading: React.FC = () => {
  const loadingStore = useLoadingStore();

  if (!loadingStore.getIsLoading()) return null;

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <ActivityIndicator color={COLORS.BRANCH_2} size="large" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    justifyContent: 'center',
  },
});
