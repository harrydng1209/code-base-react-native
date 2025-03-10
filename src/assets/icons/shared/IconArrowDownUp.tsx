import Svg, { Path, SvgProps } from 'react-native-svg';

const IconArrowDownUp: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={24} width={25} {...props}>
    <Path
      d="m11 16.5-3 3-3-3M8 4.5v15M14 7.5l3-3 3 3M17 19.5v-15"
      stroke="#484848"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export default IconArrowDownUp;
