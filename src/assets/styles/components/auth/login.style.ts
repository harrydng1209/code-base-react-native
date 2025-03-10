import { StyleSheet } from 'react-native';

import { COLORS } from '../../root/_variables.style';

const styles = StyleSheet.create({
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    height: 1,
  },
  phoneInput: {
    backgroundColor: COLORS.NEUTRALS_6,
    borderRadius: 8,
    height: 52,
    paddingLeft: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  textCreate: {
    fontWeight: 700,
    marginVertical: 16,
    textAlign: 'center',
  },
  textOr: {
    color: COLORS.TEXT_3,
    fontWeight: 500,
    marginHorizontal: 8,
  },
  title: {
    fontWeight: 700,
    marginBottom: 40,
    marginTop: 56,
  },
});

export default styles;
