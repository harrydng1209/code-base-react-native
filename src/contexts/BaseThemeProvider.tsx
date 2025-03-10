import constants from '@/constants';
import useColorScheme from '@/hooks/shared/use-color-scheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

const { themeColors } = constants;

interface IProps extends React.PropsWithChildren {}

const BaseThemeProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  const theme = useColorScheme();

  let themeConfig = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeColors[theme].BACKGROUND,
    },
  };

  if (theme === 'DARK')
    themeConfig = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: themeColors[theme].BACKGROUND,
      },
    };

  return <ThemeProvider value={themeConfig}>{children}</ThemeProvider>;
};

export default BaseThemeProvider;
