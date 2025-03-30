import { DARK, LIGHT } from '@/constants/theme-colors.const';
import useColorScheme from '@/hooks/shared/use-color-scheme';

interface ICustomColors {
  DARK?: string;
  LIGHT?: string;
}

const useThemeColor = () => {
  const theme = useColorScheme();

  const getThemeColor = (
    colorName: keyof typeof DARK & keyof typeof LIGHT,
    customColors?: ICustomColors,
  ) => {
    const customColor = customColors?.[theme];
    const themeColor = theme === 'DARK' ? DARK[colorName] : LIGHT[colorName];

    return customColor || themeColor;
  };

  return { getThemeColor };
};

export default useThemeColor;
