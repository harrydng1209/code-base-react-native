import IconGoBack from '@/assets/icons/shared/IconGoBack.svg';
import { styles } from '@/assets/styles/components/auth/register.style';
import { BaseButton } from '@/components/shared/BaseButton';
import { BaseFormItem } from '@/components/shared/BaseFormItem';
import { BaseIconButton } from '@/components/shared/BaseIconButton';
import { BaseText } from '@/components/shared/BaseText';
import { BaseTextInput } from '@/components/shared/BaseTextInput';
import { REGEXES } from '@/constants/shared.const';
import { ILoginRequest } from '@/models/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { object as yupObject, string as yupString } from 'yup';

const Register: React.FC = () => {
  const schema = yupObject({
    emailOrPhone: yupString()
      .required('Field is required')
      .test('emailOrPhone', 'Invalid format', (value) => {
        return REGEXES.EMAIL.test(value) || REGEXES.PHONE.test(value);
      }),
  });
  const registerForm = useForm<ILoginRequest>({
    defaultValues: {
      emailOrPhone: '',
    },
    mode: 'onChange',
    resolver: yupResolver<ILoginRequest>(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<ILoginRequest> = (values) => {
    if (values) router.push('/auth/register-password');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="nw-flex-1"
      keyboardVerticalOffset={64}
    >
      <BaseIconButton icon={<IconGoBack />} onPress={() => router.back()} />

      <BaseText heading="h4" style={styles.title}>
        Welcome to <br />
        Codebase React Native
      </BaseText>

      <View style={styles.formContainer}>
        <FormProvider {...registerForm}>
          <BaseFormItem label="Email/ Phone number" name="emailOrPhone">
            <BaseTextInput
              onSubmitEditing={registerForm.handleSubmit(onSubmit)}
              placeholder="Input here"
            />
          </BaseFormItem>

          <View className="nw-mb-4">
            <View>
              <BaseButton onPress={registerForm.handleSubmit(onSubmit)}>
                Next
              </BaseButton>
            </View>

            <View style={styles.textContainer}>
              <BaseText style={styles.textHasAccount}>
                You have an account!
              </BaseText>

              <BaseText
                onPress={() => router.push('/auth/login')}
                style={styles.textLogin}
              >
                Login
              </BaseText>
            </View>
          </View>
        </FormProvider>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
