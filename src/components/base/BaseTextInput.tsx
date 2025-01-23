import styles from '@/assets/styles/base/base-text-input.style';
import { TextInput, TextInputProps } from 'react-native';

interface IProps extends TextInputProps {}

const BaseTextInput: React.FC<IProps> = (props) => {
  const { style, ...otherProps } = props;

  return <TextInput style={[styles.textInput, style]} {...otherProps} />;
};

export default BaseTextInput;
