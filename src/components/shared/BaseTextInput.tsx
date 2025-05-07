import IconClearable from '@/assets/icons/shared/IconClearable.svg';
import { COLORS } from '@/assets/styles/root/_variables.style';
import { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface IProps extends TextInputProps {
  clearable?: boolean;
  prefix?: React.ReactNode;
  styleContainer?: StyleProp<ViewStyle>;
  suffix?: React.ReactNode;
}

export const BaseTextInput: React.FC<IProps> = ({
  clearable,
  onBlur,
  onFocus,
  prefix,
  style,
  styleContainer,
  suffix,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const showClear =
    clearable && otherProps.value && String(otherProps.value).length > 0;

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.containerFocused,
        styleContainer,
      ]}
    >
      {prefix && <View style={styles.prefix}>{prefix}</View>}

      <TextInput
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
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

      {!showClear && suffix && <View style={styles.suffix}>{suffix}</View>}

      {showClear && (
        <TouchableOpacity
          hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
          onPress={() => otherProps.onChangeText && otherProps.onChangeText('')}
          style={styles.clearButton}
        >
          <IconClearable />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    padding: 8,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.NEUTRALS_6,
    borderColor: COLORS.NEUTRALS_6,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
  },
  containerFocused: {
    borderColor: COLORS.NEUTRALS_GRAY,
    borderWidth: 1,
  },
  prefix: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  suffix: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 0,
    flex: 1,
    height: 52,
  },
});
