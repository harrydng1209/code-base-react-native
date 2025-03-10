import Svg, { Path, SvgProps } from 'react-native-svg';

const IconFacebook: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      d="M13.125 6.875h-1.25A1.875 1.875 0 0 0 10 8.75v8.75M7.5 11.25h5"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconFacebook;
