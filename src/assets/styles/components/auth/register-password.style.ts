import { StyleSheet } from 'react-native';

import { COLORS } from '../../root/_variables.style';

const styles = StyleSheet.create({
  agreementText: {
    fontSize: 13,
    fontWeight: 500,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  link: {
    color: COLORS.FUNTION_PROGRESS_INFOR,
    fontSize: 13,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  text: {
    color: COLORS.TEXT_3,
    fontSize: 13,
    fontWeight: 500,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontWeight: 700,
    marginBottom: 40,
    marginTop: 56,
  },
  validText: {
    color: COLORS.TEXT_POSITIVE_SECONDARY,
  },
});

export default styles;
