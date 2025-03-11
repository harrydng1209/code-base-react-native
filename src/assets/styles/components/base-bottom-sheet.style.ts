import { StyleSheet } from 'react-native';

import { COLORS } from '../root/_variables.style';

const styles = StyleSheet.create({
  closeButton: {
    height: 28,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 28,
  },
  container: { borderRadius: 80 },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  iconClose: {
    alignItems: 'center',
    backgroundColor: COLORS.NEUTRALS_6,
    borderRadius: '50%',
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 32,
    marginBottom: 16,
    marginTop: 28,
  },
});

export default styles;
