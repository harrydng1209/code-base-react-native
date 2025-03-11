import IconApple from '@/assets/icons/modules/auth/IconApple.svg';
import IconFacebook from '@/assets/icons/modules/auth/IconFacebook.svg';
import IconGoogle from '@/assets/icons/modules/auth/IconGoogle.svg';
import IconTwitter from '@/assets/icons/modules/auth/IconTwitter.svg';
import IconGoBack from '@/assets/icons/shared/IconGoBack.svg';
import styles from '@/assets/styles/components/auth/login.style';
import BaseButton from '@/components/base/BaseButton';
import BaseFormItem from '@/components/base/BaseFormItem';
import BaseIconButton from '@/components/base/BaseIconButton';
import BaseText from '@/components/base/BaseText';
import BaseTextInput from '@/components/base/BaseTextInput';
import constants from '@/constants';
import { ILoginRequest } from '@/models/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { object as yupObject, string as yupString } from 'yup';

const { REGEXES } = constants.shared;

const Login: React.FC = () => {
  const schema = yupObject({
    emailOrPhone: yupString()
      .required('Field is required')
      .test('emailOrPhone', 'Invalid format', (value) => {
        return REGEXES.EMAIL.test(value) || REGEXES.PHONE.test(value);
      }),
  });
  const loginForm = useForm<ILoginRequest>({
    defaultValues: {
      emailOrPhone: '',
    },
    mode: 'onChange',
    resolver: yupResolver<ILoginRequest>(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<ILoginRequest> = (values) => {
    if (values) router.push('/auth/login-password');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="nw-flex-1"
      keyboardVerticalOffset={64}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <BaseIconButton
          icon={<IconGoBack />}
          onPress={() => router.push('/')}
        />

        <BaseText heading="h4" style={styles.title}>
          Log in
        </BaseText>

        <View style={styles.formContainer}>
          <View>
            <FormProvider {...loginForm}>
              <BaseFormItem label="Email/ Phone number" name="emailOrPhone">
                <BaseTextInput
                  onSubmitEditing={loginForm.handleSubmit(onSubmit)}
                  placeholder="Input here"
                />
              </BaseFormItem>

              <BaseButton
                className="nw-mt-4"
                onPress={loginForm.handleSubmit(onSubmit)}
              >
                Next
              </BaseButton>
            </FormProvider>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <BaseText style={styles.textOr}>Or</BaseText>
              <View style={styles.line} />
            </View>

            <View className="nw-gap-3">
              <BaseButton icon={<IconGoogle />} type="default">
                Continue with Google
              </BaseButton>
              <BaseButton icon={<IconApple />} type="default">
                Continue with Apple
              </BaseButton>
              <BaseButton icon={<IconFacebook />} type="default">
                Continue with Facebook
              </BaseButton>
              <BaseButton icon={<IconTwitter />} type="default">
                Continue with X (Twitter)
              </BaseButton>
            </View>
          </View>

          <BaseText
            onPress={() => router.push('/auth/register')}
            style={styles.textCreate}
          >
            Create an account
          </BaseText>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
