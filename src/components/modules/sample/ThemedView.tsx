import useThemeColor from '@/hooks/shared/use-theme-color';
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  darkColor?: string;
  lightColor?: string;
};

export function ThemedView({
  darkColor,
  lightColor,
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { dark: darkColor, light: lightColor },
    'BACKGROUND',
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
