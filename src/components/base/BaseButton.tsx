import { Button, ButtonProps } from 'react-native';

interface IProps extends ButtonProps {}

const BaseButton: React.FC<IProps> = (props) => {
  const { ...otherProps } = props;

  return <Button {...otherProps} />;
};

export default BaseButton;
