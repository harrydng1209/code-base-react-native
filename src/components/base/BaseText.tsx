import styles from '@/assets/styles/components/base-text.style';
import useThemeColor from '@/hooks/shared/use-theme-color';
import { Text, type TextProps } from 'react-native';

interface IProps extends TextProps {
  darkColor?: string;
  heading?: 'h1' | 'h2' | 'h3' | 'h4';
  lightColor?: string;
}

const BaseText: React.FC<IProps> = (props) => {
  const { darkColor, heading, lightColor, style, ...otherProps } = props;

  const color = useThemeColor({ DARK: darkColor, LIGHT: lightColor }, 'TEXT');

  const headingStyle = heading ? styles[heading] : styles.text;

  return <Text style={[headingStyle, { color }, style]} {...otherProps} />;
};

export default BaseText;
