import { COLORS } from '@/assets/styles/root/_variables.style';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IconNeoBankTab: React.FC<SvgProps> = (props) => {
  const { stroke = COLORS.TEXT_3, ...otherProps } = props;

  return (
    <Svg fill="none" height={24} width={25} {...otherProps}>
      <Path
        d="M12.375 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M17.696 5.695c2.543-.676 4.445-.604 5.01.37 1.031 1.774-2.76 5.87-8.467 9.148-5.707 3.278-11.166 4.5-12.195 2.719-.568-.978.329-2.66 2.202-4.522"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default IconNeoBankTab;
