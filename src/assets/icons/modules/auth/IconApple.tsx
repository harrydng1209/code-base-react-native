import Svg, { Path, SvgProps } from 'react-native-svg';

const IconApple: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={21} width={20} {...props}>
    <Path
      d="M16.875 6.744c-.896-.849-2.422-1.369-3.75-1.369A4.978 4.978 0 0 0 10 6.469a4.977 4.977 0 0 0-3.056-1.094c-2.881-.04-5.142 2.367-5.069 5.25a9.345 9.345 0 0 0 2.941 6.571c.464.437 1.078.68 1.715.679h6.852a2.48 2.48 0 0 0 1.817-.781c1.238-1.328 1.675-2.594 1.675-2.594C15.563 13.6 15 12.088 15 10.377c0-1.43.912-2.72 1.875-3.632v-.001ZM13.125 1.625h-.078A2.5 2.5 0 0 0 10.625 3.5"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconApple;
