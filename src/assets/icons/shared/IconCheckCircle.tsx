import { COLORS } from '@/assets/styles/root/_variables.style';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconCheckCircle: React.FC<SvgProps> = (props) => {
  const { stroke = COLORS.TEXT_3, ...otherProps } = props;

  return (
    <Svg fill="none" height={16} width={16} {...otherProps}>
      <Path
        d="M5.5 8.5 7 10l3.5-3.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default IconCheckCircle;
