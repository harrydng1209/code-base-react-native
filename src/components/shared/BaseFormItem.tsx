import IconWarningCircle from '@/assets/icons/shared/IconWarningCircle.svg';
import { COLORS } from '@/assets/styles/root/_variables.style';
import { cloneElement, isValidElement } from 'react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { BaseText } from './BaseText';

interface IProps extends React.PropsWithChildren {
  label?: React.ReactNode;
  name: string;
  showError?: boolean;
}

export const BaseFormItem: React.FC<IProps> = ({
  children,
  label = '',
  name,
  showError = true,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(errors?.[name]);

  return (
    <View className="nw-gap-1">
      {label && <View style={styles.label}>{label}</View>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value } }) => {
          if (isValidElement(children))
            return cloneElement(children as React.ReactElement, {
              name,
              onBlur,
              onChangeText: onChange,
              styleContainer: [
                children.props.styleContainer,
                hasError && styles.borderError,
              ],
              value,
            });
          return <></>;
        }}
        {...otherProps}
      />

      {errors?.[name] && showError && (
        <View style={styles.errorContainer}>
          <IconWarningCircle />

          <BaseText style={styles.error}>
            {String(errors[name]?.message)}
          </BaseText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borderError: {
    borderColor: COLORS.FUNCTION_ERROR,
  },
  error: {
    color: COLORS.FUNCTION_ERROR,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  errorContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  label: {
    alignItems: 'center',
    color: COLORS.TEXT_1,
    flexDirection: 'row',
    fontSize: 12,
    fontWeight: 400,
    gap: 4,
    lineHeight: 16,
  },
});
