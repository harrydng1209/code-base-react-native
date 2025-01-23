import useThemeColor from '@/hooks/shared/use-theme-color';
import { Text, type TextProps } from 'react-native';

interface IProps extends TextProps {
  darkColor?: string;
  lightColor?: string;
}

const BaseText: React.FC<IProps> = (props) => {
  const { darkColor, lightColor, style, ...otherProps } = props;

  const color = useThemeColor({ dark: darkColor, light: lightColor }, 'TEXT');

  return <Text style={[{ color }, style]} {...otherProps} />;
};

export default BaseText;
