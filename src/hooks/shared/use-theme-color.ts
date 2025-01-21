/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/colors.const';
import { useColorScheme } from '@/hooks/shared/use-color-scheme';

export function useThemeColor(
  props: { dark?: string; light?: string },
  colorName: keyof typeof Colors.dark & keyof typeof Colors.light,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
