import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../root/_variables.style';

export const styles = StyleSheet.create({
  default: {
    fontFamily: FONTS.BASE_FONT_FAMILY,
  },
  error: {
    color: COLORS.FUNCTION_ERROR,
  },
  h1: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 60,
  },
  h2: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 45,
  },
  h3: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 37.5,
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 25,
  },
  h6: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 20,
  },
  text: {
    fontSize: FONTS.BASE_FONT_SIZE,
    fontWeight: FONTS.BASE_FONT_WEIGHT,
    lineHeight: FONTS.BASE_LINE_HEIGHT,
  },
});
