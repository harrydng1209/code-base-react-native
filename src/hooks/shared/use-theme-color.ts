import constants from '@/constants';
import useColorScheme from '@/hooks/shared/use-color-scheme';

const { themeColors } = constants;

interface IProps {
  DARK?: string;
  LIGHT?: string;
}

const useThemeColor = (
  props: IProps,
  colorName: keyof typeof themeColors.DARK & keyof typeof themeColors.LIGHT,
) => {
  const theme = useColorScheme();

  const colorProp = props[theme];

  if (colorProp) return colorProp;

  return themeColors[theme][colorName];
};

export default useThemeColor;
