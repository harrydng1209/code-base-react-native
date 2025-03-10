import Svg, { Path, SvgProps } from 'react-native-svg';

const IconEye: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={16} width={16} {...props}>
    <Path
      d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      d="M15 8s-2-4.5-7-4.5S1 8 1 8s2 4.5 7 4.5S15 8 15 8Z"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconEye;
