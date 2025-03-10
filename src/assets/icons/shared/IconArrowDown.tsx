import Svg, { Path, SvgProps } from 'react-native-svg';

const IconArrowDown: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={16} width={16} {...props}>
    <Path
      d="m13 6-5 5-5-5"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconArrowDown;
