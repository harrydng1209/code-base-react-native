import { StyleSheet } from 'react-native';

import { COLORS } from '../root/_variables.style';

export const styles = StyleSheet.create({
  carousel: {
    marginBottom: 48,
  },
  carouselPagination: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 16,
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 8,
  },
  image: {
    backgroundColor: '#F0F0F0',
    marginBottom: 48,
    resizeMode: 'contain',
    width: '100%',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    textAlign: 'center',
  },
  skip: {
    fontSize: 14,
    fontWeight: 700,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideDescription: {
    color: COLORS.TEXT_2,
    fontSize: 13,
    marginHorizontal: 26,
    textAlign: 'center',
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 36,
    marginHorizontal: 26,
    textAlign: 'center',
  },
});
