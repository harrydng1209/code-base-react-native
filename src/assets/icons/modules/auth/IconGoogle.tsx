import Svg, { Path, SvgProps } from 'react-native-svg';

const IconGoogle: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M10 10h6.875a6.875 6.875 0 1 1-1.571-4.375"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconGoogle;
