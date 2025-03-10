import { COLORS } from '@/assets/styles/root/_variables.style';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconWalletTab: React.FC<SvgProps> = (props) => {
  const { stroke = COLORS.TEXT_3, ...otherProps } = props;

  return (
    <Svg fill="none" height={24} width={25} {...otherProps}>
      <Path
        d="M4.375 5.25v12a1.5 1.5 0 0 0 1.5 1.5h15a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-15a1.5 1.5 0 0 1-1.5-1.5Zm0 0a1.5 1.5 0 0 1 1.5-1.5h12.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M17.5 13.313a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.874Z"
        fill="#B5B5B5"
      />
    </Svg>
  );
};

export default IconWalletTab;
