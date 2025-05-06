import { styles } from '@/assets/styles/components/base-button.style';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';

import { BaseText } from './BaseText';

interface IProps extends TouchableOpacityProps {
  icon?: React.ReactNode;
  iconPosition?: 'end' | 'start';
  styleText?: StyleProp<TextStyle>;
  type?: 'default' | 'disable' | 'primary' | 'secondary';
}

export const BaseButton: React.FC<IProps> = (props) => {
  const {
    children,
    icon,
    iconPosition = 'start',
    style,
    styleText,
    type = 'primary',
    ...otherProps
  } = props;

  const buttonStyles = {
    default: styles.defaultButton,
    disable: styles.secondaryButton,
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
  };

  const textStyles = {
    default: styles.defaultText,
    disable: styles.disable,
    primary: styles.primaryText,
    secondary: styles.secondaryText,
  };

  const iconStyles = {
    end: { right: 0 },
    start: { left: 0 },
  };

  const iconDirection = iconPosition === 'start' ? 'row' : 'row-reverse';
  const flexDirection = icon ? iconDirection : 'row';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyles[otherProps.disabled ? 'disable' : type],
        style,
      ]}
      {...otherProps}
    >
      <View
        style={[
          {
            flexDirection,
          },
          styles.insideContainer,
        ]}
      >
        {icon && (
          <View style={[iconStyles[iconPosition], { position: 'absolute' }]}>
            {icon}
          </View>
        )}

        <BaseText
          style={[
            styles.text,
            textStyles[otherProps.disabled ? 'disable' : type],
            styleText,
          ]}
        >
          {children}
        </BaseText>
      </View>
    </TouchableOpacity>
  );
};
