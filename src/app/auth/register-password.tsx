import IconEye from '@/assets/icons/modules/auth/IconEye.svg';
import IconEyeClosed from '@/assets/icons/modules/auth/IconEyeClosed.svg';
import IconCheckCircle from '@/assets/icons/shared/IconCheckCircle.svg';
import IconGoBack from '@/assets/icons/shared/IconGoBack.svg';
import { styles } from '@/assets/styles/components/auth/register-password.style';
import { COLORS } from '@/assets/styles/root/_variables.style';
import { BaseButton } from '@/components/shared/BaseButton';
import { BaseFormItem } from '@/components/shared/BaseFormItem';
import { BaseIconButton } from '@/components/shared/BaseIconButton';
import { BaseText } from '@/components/shared/BaseText';
import { BaseTextInput } from '@/components/shared/BaseTextInput';
import { REGEXES } from '@/constants/shared.const';
import { IPasswordRequest } from '@/models/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import { object as yupObject, string as yupString } from 'yup';

const RegisterPassword: React.FC = () => {
  const schema = yupObject({
    password: yupString()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        REGEXES.PASSWORD,
        'Password must contain at least 8 characters, including letters and numbers',
      ),
  });
  const passwordForm = useForm<IPasswordRequest>({
    defaultValues: {
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver<IPasswordRequest>(schema),
  });
  const router = useRouter();

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const password = passwordForm.watch('password');
  const isLengthValid = password.length >= 8;
  const isFormatValid = REGEXES.PASSWORD.test(password);
  const isPasswordValid = isLengthValid && isFormatValid;

  const onSubmit: SubmitHandler<IPasswordRequest> = (values) => {
    if (values) console.info(values);
  };

  const toggleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="nw-flex-1"
      keyboardVerticalOffset={64}
    >
      <BaseIconButton icon={<IconGoBack />} onPress={() => router.back()} />

      <BaseText heading="h4" style={styles.title}>
        Create a password
      </BaseText>

      <View style={styles.formContainer}>
        <FormProvider {...passwordForm}>
          <View className="nw-gap-4">
            <BaseFormItem label="Password" name="password">
              <BaseTextInput
                onSubmitEditing={passwordForm.handleSubmit(onSubmit)}
                placeholder="Input here"
                secureTextEntry={!isShowPassword}
                suffix={
                  <TouchableOpacity onPress={toggleIsShowPassword}>
                    {isShowPassword ? <IconEye /> : <IconEyeClosed />}
                  </TouchableOpacity>
                }
              />
            </BaseFormItem>

            <View className="nw-gap-2">
              <View style={styles.textContainer}>
                <IconCheckCircle
                  color={
                    isLengthValid
                      ? COLORS.TEXT_POSITIVE_SECONDARY
                      : COLORS.TEXT_3
                  }
                />

                <BaseText
                  style={[styles.text, isLengthValid ? styles.validText : null]}
                >
                  8 characters
                </BaseText>
              </View>

              <View style={styles.textContainer}>
                <IconCheckCircle
                  color={
                    isLengthValid
                      ? COLORS.TEXT_POSITIVE_SECONDARY
                      : COLORS.TEXT_3
                  }
                />

                <BaseText
                  style={[styles.text, isFormatValid ? styles.validText : null]}
                >
                  A letter and a number
                </BaseText>
              </View>
            </View>
          </View>

          <View className="nw-mb-4 nw-gap-3">
            {isPasswordValid && (
              <BaseText style={styles.agreementText}>
                By tapping "create an account" button, you agree to{' '}
                <BaseText style={styles.link}>Team...</BaseText> and{' '}
                <BaseText style={styles.link}>Policy</BaseText>
              </BaseText>
            )}

            <BaseButton
              className="nw-mb-3"
              onPress={passwordForm.handleSubmit(onSubmit)}
            >
              Create an account
            </BaseButton>
          </View>
        </FormProvider>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterPassword;
