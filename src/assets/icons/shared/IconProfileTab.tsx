import { COLORS } from '@/assets/styles/root/_variables.style';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconProfileTab: React.FC<SvgProps> = (props) => {
  const { stroke = COLORS.TEXT_3, ...otherProps } = props;

  return (
    <Svg fill="none" height={24} width={25} {...otherProps}>
      <Path
        d="M6.856 18.69a6.75 6.75 0 0 1 12.038 0"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M12.875 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M12.875 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default IconProfileTab;
