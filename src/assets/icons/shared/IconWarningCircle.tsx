import Svg, { Path, SvgProps } from 'react-native-svg';

const IconWarningCircle: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={16} width={16} {...props}>
    <Path
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM8 8.5V5"
      stroke="#F61515"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M8 11.25a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" fill="#F61515" />
  </Svg>
);

export default IconWarningCircle;
