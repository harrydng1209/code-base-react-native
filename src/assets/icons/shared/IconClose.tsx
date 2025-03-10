import Svg, { Path, SvgProps } from 'react-native-svg';

const IconClose = (props: SvgProps) => (
  <Svg fill="none" height={12} width={12} {...props}>
    <Path
      d="m9.375 2.625-6.75 6.75M9.375 9.375l-6.75-6.75"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconClose;
