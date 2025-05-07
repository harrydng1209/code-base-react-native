import { LAYOUTS } from '@/assets/styles/root/_variables.style';
import { ICarouselItem } from '@/models/interfaces/shared.interface';
import { sleep } from '@/utils/shared.util';
import { useCallback, useEffect, useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';

interface IProps {
  activeIndex: number;
  autoScrollInterval?: number;
  data: ICarouselItem[];
  onScroll: (index: number) => void;
  renderItem: (item: ICarouselItem) => JSX.Element;
}

export const BaseCarousel: React.FC<IProps> = ({
  activeIndex,
  autoScrollInterval = 3000,
  data,
  onScroll,
  renderItem,
  ...otherProps
}) => {
  const { width: screenWidth } = Dimensions.get('window');
  const containerWidth = screenWidth - LAYOUTS.PADDING * 2;
  const flatListRef = useRef<FlatList<ICarouselItem>>(null);
  const currentIndex = useRef(activeIndex);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getItemLayout = useCallback(
    (_: ArrayLike<ICarouselItem> | null | undefined, index: number) => ({
      index,
      length: containerWidth,
      offset: containerWidth * index,
    }),
    [containerWidth],
  );

  const startAutoScroll = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        currentIndex.current = (currentIndex.current + 1) % data.length;
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: currentIndex.current,
        });
        onScroll(currentIndex.current);
      }, autoScrollInterval);
    }
  }, [autoScrollInterval, data.length, onScroll]);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleScrollEndDrag = useCallback(async () => {
    stopAutoScroll();
    await sleep(3);
    startAutoScroll();
  }, [startAutoScroll]);

  const initializeAutoScroll = useCallback(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  const handleActiveIndexChange = useCallback(async () => {
    flatListRef.current?.scrollToIndex({ animated: true, index: activeIndex });
    currentIndex.current = activeIndex;
    stopAutoScroll();
    await sleep(3);
    startAutoScroll();
  }, [activeIndex, startAutoScroll]);

  useEffect(() => {
    return initializeAutoScroll();
  }, [initializeAutoScroll]);

  useEffect(() => {
    handleActiveIndexChange();
  }, [handleActiveIndexChange]);

  return (
    <FlatList
      data={data}
      getItemLayout={getItemLayout}
      horizontal
      keyExtractor={(item) => String(item.id)}
      onScrollBeginDrag={stopAutoScroll}
      onScrollEndDrag={handleScrollEndDrag}
      pagingEnabled
      ref={flatListRef}
      renderItem={({ item }) => renderItem(item)}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      {...otherProps}
    />
  );
};
