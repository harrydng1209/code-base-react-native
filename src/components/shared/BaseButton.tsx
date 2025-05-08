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
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'end' | 'start';
  styleText?: StyleProp<TextStyle>;
  type?: 'default' | 'primary' | 'secondary';
  variant?: 'outline' | 'solid';
}

export const BaseButton: React.FC<IProps> = ({
  children,
  disabled,
  icon,
  iconPosition = 'start',
  style,
  styleText,
  type = 'primary',
  variant = 'solid',
  ...otherProps
}) => {
  const getButtonStyle = () => {
    if (variant === 'outline') {
      return {
        default: undefined,
        primary: styles.primaryOutlineButton,
        secondary: undefined,
      }[type];
    }

    return {
      default: styles.defaultButton,
      primary: styles.primaryButton,
      secondary: styles.secondaryButton,
    }[type];
  };

  const getTextStyle = () => {
    if (variant === 'outline') {
      return {
        default: styles.defaultText,
        primary: styles.primaryOutlineText,
        secondary: undefined,
      }[type];
    }

    return {
      default: styles.defaultText,
      primary: styles.primaryText,
      secondary: styles.secondaryText,
    }[type];
  };

  const getDisabledStyle = () => {
    if (variant === 'outline') return undefined;
    return styles.disabled;
  };

  const getDisabledTextStyle = () => {
    if (variant === 'outline') return undefined;
    return styles.disabledText;
  };

  const iconStyles = {
    end: { right: 0 },
    start: { left: 0 },
  };

  const iconDirection = iconPosition === 'start' ? 'row' : 'row-reverse';
  const flexDirection = icon ? iconDirection : 'row';

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        getButtonStyle(),
        disabled && getDisabledStyle(),
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
            getTextStyle(),
            disabled && getDisabledTextStyle(),
            styleText,
          ]}
        >
          {children}
        </BaseText>
      </View>
    </TouchableOpacity>
  );
};
