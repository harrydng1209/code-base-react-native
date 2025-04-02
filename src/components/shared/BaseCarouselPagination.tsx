import { styles } from '@/assets/styles/components/base-carousel-pagination.style';
import { ICarouselItem } from '@/models/interfaces/shared.interface';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface IProps extends TouchableOpacityProps {
  activeIndex: number;
  data: ICarouselItem[];
  onPageChange: (index: number) => void;
}

export const BaseCarouselPagination: React.FC<IProps> = (props) => {
  const { activeIndex, data, onPageChange, ...otherProps } = props;

  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPageChange(index)}
          {...otherProps}
        >
          <View
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
