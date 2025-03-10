import IconEye from '@/assets/icons/modules/auth/IconEye';
import IconEyeClosed from '@/assets/icons/modules/auth/IconEyeClosed';
import IconGoBack from '@/assets/icons/shared/IconGoBack';
import BaseButton from '@/components/base/BaseButton';
import BaseFormItem from '@/components/base/BaseFormItem';
import BaseIconButton from '@/components/base/BaseIconButton';
import BaseText from '@/components/base/BaseText';
import BaseTextInput from '@/components/base/BaseTextInput';
import { IPasswordRequest } from '@/models/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { object as yupObject, string as yupString } from 'yup';

const LoginPassword: React.FC = () => {
  const schema = yupObject({
    password: yupString()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
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
        Password
      </BaseText>

      <View style={styles.formContainer}>
        <FormProvider {...passwordForm}>
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

          <BaseButton
            className="nw-mb-4"
            onPress={passwordForm.handleSubmit(onSubmit)}
          >
            Login
          </BaseButton>
        </FormProvider>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textForgot: {
    fontWeight: 700,
    textAlign: 'center',
  },
  title: {
    fontWeight: 700,
    marginBottom: 40,
    marginTop: 56,
  },
});

export default LoginPassword;
