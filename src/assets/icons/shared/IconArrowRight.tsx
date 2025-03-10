import Svg, { Path, SvgProps } from 'react-native-svg';

const IconArrowRight: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={16} width={16} {...props}>
    <Path
      d="m6 3 5 5-5 5"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconArrowRight;
