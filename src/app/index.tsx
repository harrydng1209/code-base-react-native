import { styles } from '@/assets/styles/components/app.style';
import { LAYOUTS } from '@/assets/styles/root/_variables.style';
import { BaseButton } from '@/components/shared/BaseButton';
import { BaseCarousel } from '@/components/shared/BaseCarousel';
import { BaseCarouselPagination } from '@/components/shared/BaseCarouselPagination';
import { BaseText } from '@/components/shared/BaseText';
import { ICarouselItem } from '@/models/interfaces/shared.interface';
import { useRouter } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';

const App: React.FC = () => {
  const router = useRouter();

  const { width: screenWidth } = Dimensions.get('window');
  const containerWidth = screenWidth - LAYOUTS.PADDING * 2;
  const carouselData: ICarouselItem[] = [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      id: 1,
      imageSrc: require('@/assets/images/modules/auth/mock-carousel.jpg'),
      title: 'Codebase React Native',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      id: 2,
      imageSrc: require('@/assets/images/modules/auth/mock-carousel.jpg'),
      title: 'Introduce',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      id: 3,
      imageSrc: require('@/assets/images/modules/auth/mock-carousel.jpg'),
      title: 'Introduce',
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScrollToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <View style={styles.carouselPagination}>
        <BaseCarouselPagination
          activeIndex={activeIndex}
          data={carouselData}
          onPageChange={handleScrollToIndex}
        />
        <BaseText
          onPress={() => router.push('/(tabs)/home-tab')}
          style={styles.skip}
        >
          Skip
        </BaseText>
      </View>

      <View style={styles.carousel}>
        <BaseCarousel
          activeIndex={activeIndex}
          data={carouselData}
          onScroll={handleScrollToIndex}
          renderItem={(item) => (
            <View style={styles.slide}>
              <Image source={item.imageSrc} style={[styles.image]} />

              <View style={{ width: containerWidth }}>
                <BaseText
                  heading="h4"
                  style={[styles.slideTitle, { marginBottom: 8 }]}
                >
                  {String(item.title)}
                </BaseText>

                <BaseText style={styles.slideDescription}>
                  {String(item.description)}
                </BaseText>
              </View>
            </View>
          )}
        />
      </View>

      <View>
        <BaseButton
          className="nw-mb-4"
          styleText={{ fontSize: 16, lineHeight: 24 }}
        >
          Get started
        </BaseButton>

        <BaseText
          onPress={() => router.push('/auth/login')}
          style={styles.loginText}
        >
          Log in
        </BaseText>
      </View>
    </>
  );
};

export default App;
