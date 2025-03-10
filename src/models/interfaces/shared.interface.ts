import { ImageSourcePropType } from 'react-native';

export interface ICarouselItem {
  [key: string]: unknown;
  id: number | string;
  imageSrc: ImageSourcePropType;
}
