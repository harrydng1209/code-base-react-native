import { StyleSheet } from 'react-native';

import { COLORS } from '../root/_variables.style';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  defaultButton: {
    backgroundColor: COLORS.NEUTRALS_WHITE,
    borderColor: COLORS.NEUTRALS_5,
    borderWidth: 1,
  },
  defaultText: {
    color: COLORS.NEUTRALS_1,
  },
  disable: {
    backgroundColor: COLORS.NEUTRALS_GRAY,
    color: COLORS.TEXT_3,
  },
  insideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: COLORS.BRANCH_2,
  },
  primaryText: {
    color: COLORS.TEXT_WHITE,
  },
  secondaryButton: {
    backgroundColor: COLORS.NEUTRALS_6,
  },
  secondaryText: {
    color: COLORS.TEXT_1,
  },
  text: {
    fontWeight: 700,
  },
});
