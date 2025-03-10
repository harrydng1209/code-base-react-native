import { StyleSheet } from 'react-native';

import { FONTS } from '../root/_variables.style';

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 64,
  },
  h2: {
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 56,
  },
  h3: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 40,
  },
  h4: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 40,
  },
  text: {
    fontFamily: FONTS.BASE_FONT_FAMILY,
    fontSize: FONTS.BASE_FONT_SIZE,
    fontWeight: FONTS.BASE_FONT_WEIGHT,
    lineHeight: FONTS.BASE_LINE_HEIGHT,
  },
});

export default styles;
