import Svg, { Path, SvgProps } from 'react-native-svg';

const IconTwitter: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M3.75 3.125H7.5l8.75 13.75H12.5L3.75 3.125ZM8.897 11.213 3.75 16.875M16.25 3.125l-5.147 5.662"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconTwitter;
