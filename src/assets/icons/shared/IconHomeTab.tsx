import { COLORS } from '@/assets/styles/root/_variables.style';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconHomeTab: React.FC<SvgProps> = (props) => {
  const { stroke = COLORS.TEXT_3, ...otherProps } = props;

  return (
    <Svg fill="none" height={24} width={25} {...otherProps}>
      <Path
        d="M3.875 20.25h16.5v-9a.75.75 0 0 0-.22-.53l-7.5-7.5a.749.749 0 0 0-1.06 0l-7.5 7.5a.75.75 0 0 0-.22.53v9Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default IconHomeTab;
