import Svg, { Path, SvgProps } from 'react-native-svg';

const IconEyeClosed: React.FC<SvgProps> = (props) => (
  <Svg fill="none" height={16} width={16} {...props}>
    <Path
      d="m3 2.5 10 11M9.682 9.85a2.5 2.5 0 1 1-3.364-3.7M8.47 5.544a2.5 2.5 0 0 1 2.02 2.221"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      d="M13.038 10.569C14.401 9.349 15 8 15 8s-2-4.5-7-4.5c-.433 0-.865.035-1.292.105M4.625 4.287C2.077 5.577 1 8 1 8s2 4.5 7 4.5a7.378 7.378 0 0 0 3.375-.787"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconEyeClosed;
