import { StyleSheet } from 'react-native';

import { COLORS } from '../root/_variables.style';

export const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: COLORS.NEUTRALS_2,
    width: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: COLORS.NEUTRALS_4,
    borderRadius: 16,
    height: 6,
    marginHorizontal: 2,
    width: 6,
  },
  inactiveDot: {
    width: 6,
  },
});
