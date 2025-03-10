import Svg, { Path, SvgProps } from 'react-native-svg';

const IconNotification: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M7.5 15a2.5 2.5 0 0 0 5 0M4.375 8.125a5.625 5.625 0 0 1 11.25 0c0 2.798.649 5.047 1.164 5.938a.625.625 0 0 1-.539.937H3.75a.626.626 0 0 1-.537-.938c.514-.89 1.162-3.14 1.162-5.937Z"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconNotification;
