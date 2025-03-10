import Svg, { Path, SvgProps } from 'react-native-svg';

const IconGoBack: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M12.5 16.25 6.25 10l6.25-6.25"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export default IconGoBack;
