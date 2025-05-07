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
    borderColor: COLORS.NEUTRALS_1,
    borderWidth: 1,
  },
  defaultText: {
    color: COLORS.NEUTRALS_1,
  },
  disabled: {
    backgroundColor: COLORS.NEUTRALS_GRAY,
  },
  disabledText: {
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
  primaryOutlineButton: {
    backgroundColor: COLORS.NEUTRALS_WHITE,
    borderColor: COLORS.BRANCH_2,
    borderWidth: 1,
  },
  primaryOutlineText: {
    color: COLORS.BRANCH_2,
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
