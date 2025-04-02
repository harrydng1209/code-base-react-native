import { COLORS } from '@/assets/styles/root/_variables.style';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface IProps extends TextInputProps {
  prefix?: React.ReactNode;
  styleContainer?: StyleProp<ViewStyle>;
  suffix?: React.ReactNode;
}

export const BaseTextInput: React.FC<IProps> = (props) => {
  const { prefix, style, styleContainer, suffix, ...otherProps } = props;

  return (
    <View style={[styles.container, styleContainer]}>
      {prefix && <View style={styles.prefix}>{prefix}</View>}

      <TextInput
        placeholderTextColor={COLORS.TEXT_3}
        style={[
          styles.textInput,
          {
            backgroundColor: COLORS.NEUTRALS_6,
            outline: 'none',
            paddingLeft: prefix ? 0 : 16,
            paddingRight: suffix ? 0 : 16,
            textAlign: otherProps.textAlign,
          },
          style,
        ]}
        {...otherProps}
      />

      {suffix && <View style={styles.suffix}>{suffix}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.NEUTRALS_6,
    borderColor: COLORS.NEUTRALS_6,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
  },
  prefix: {
    paddingHorizontal: 16,
  },
  suffix: {
    paddingHorizontal: 16,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 0,
    flex: 1,
    height: 52,
  },
});
