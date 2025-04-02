import { COLORS } from '@/assets/styles/root/_variables.style';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
  icon: React.ReactNode;
}

export const BaseIconButton: React.FC<IProps> = (props) => {
  const { icon, style, ...otherProps } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...otherProps}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.NEUTRALS_6,
    borderRadius: 40,
    height: 36,
    justifyContent: 'center',
    padding: 8,
    width: 36,
  },
});
