import Svg, { Path, SvgProps } from 'react-native-svg';

const IconImageMock: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={20} width={20} {...props}>
    <Path
      d="M16.875 3.75H3.125a.625.625 0 0 0-.625.625v11.25c0 .345.28.625.625.625h13.75c.345 0 .625-.28.625-.625V4.375a.625.625 0 0 0-.625-.625Z"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      d="M12.188 8.594a.781.781 0 1 0 0-1.563.781.781 0 0 0 0 1.563Z"
      fill="#343330"
    />
    <Path
      d="m11.509 12.813 2.007-2.005a.625.625 0 0 1 .883 0L17.5 13.91"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      d="m2.5 13.179 4.245-4.246a.625.625 0 0 1 .885 0l7.316 7.317"
      stroke="#343330"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconImageMock;
