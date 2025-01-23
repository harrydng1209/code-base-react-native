import constants from '@/constants';
import { useColorScheme } from '@/hooks/shared/use-color-scheme';

const { themeColors } = constants;

interface IProps {
  dark?: string;
  light?: string;
}

const useThemeColor = (
  props: IProps,
  colorName: keyof typeof themeColors.dark & keyof typeof themeColors.light,
) => {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) return colorFromProps;

  return themeColors[theme][colorName];
};

export default useThemeColor;
