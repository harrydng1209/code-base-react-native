import { styles } from '@/assets/styles/components/base-text.style';
import { useThemeColor } from '@/hooks/shared/use-theme-color';
import { Text, type TextProps } from 'react-native';

interface IProps extends TextProps {
  children: React.ReactNode;
  darkColor?: string;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  lightColor?: string;
  type?: 'error';
}

export const BaseText: React.FC<IProps> = ({
  children,
  darkColor,
  heading,
  lightColor,
  style,
  type,
  ...otherProps
}) => {
  const { getThemeColor } = useThemeColor();

  const textColor = getThemeColor('TEXT', {
    DARK: darkColor,
    LIGHT: lightColor,
  });

  const textStyle = heading ? styles[heading] : styles.text;
  const typeStyle = type ? styles[type] : null;

  return (
    <Text
      style={[
        styles.default,
        { color: textColor },
        textStyle,
        typeStyle,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};
