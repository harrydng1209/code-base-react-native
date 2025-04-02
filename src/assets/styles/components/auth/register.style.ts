import { StyleSheet } from 'react-native';

import { COLORS } from '../../root/_variables.style';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
    marginTop: 18,
  },
  textHasAccount: {
    color: COLORS.TEXT_3,
    fontWeight: 500,
    lineHeight: 20,
  },
  textLogin: {
    fontWeight: 700,
  },
  title: {
    fontWeight: 700,
    marginBottom: 40,
    marginTop: 56,
  },
});
