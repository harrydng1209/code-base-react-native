import useColorScheme from '@/hooks/shared/use-color-scheme';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

interface IProps extends React.PropsWithChildren {}

const AppThemeProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  const theme = useColorScheme();

  let themeConfig = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  if (theme === 'DARK')
    themeConfig = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: 'transparent',
      },
    };

  return <ThemeProvider value={themeConfig}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
