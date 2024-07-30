import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { screen } from './utils';
import type { TImages, TProps } from './types';
import { styles } from './styles';

export const ImageGallerySwiper = ({
  images,
  displayName,
  textStyles,
  imageStyles,
  swipeDown,
  swipeUp,
  showThumbs,
  thumbStyles,
  thumbContainerStyles,
  getSwipedImage,
  activeImage,
  arrows,
  children,
}: TProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const horizontalScroll = React.useRef<any>();
  const handleVerticalSwipe = (e: any, item: TImages) => {
    getSwipedImage && getSwipedImage(item);
    if (swipeDown && e.nativeEvent.contentOffset.y < 0) swipeDown(item);
    if (swipeUp && e.nativeEvent.contentOffset.y > 0) swipeUp(item);
  };

  const handlePressLeft = () => {
    horizontalScroll.current.scrollTo({
      x: screen.width * (selectedIndex - 1),
    });
  };

  const handlePressRight = () => {
    horizontalScroll.current.scrollTo({
      x: screen.width * (selectedIndex + 1),
    });
  };

  const handleHorizontalSwipe = (e: any) => {
    const currentImageIndex = Math.round(
      e.nativeEvent.contentOffset.x / screen.width
    );
    setSelectedIndex(currentImageIndex);
  };

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={horizontalScroll}
        onScroll={handleHorizontalSwipe}
        scrollEventThrottle={200}
        contentOffset={{
          x: activeImage ? screen.width * activeImage : 0,
          y: 0,
        }}
      >
        {images?.map((item: TImages, index: number) => {
          return (
            <ScrollView
              scrollEventThrottle={200}
              key={index}
              onScrollEndDrag={(e) => handleVerticalSwipe(e, item)}
            >
              <Image
                source={{ uri: item.url || item.imageUrl }}
                style={
                  showThumbs
                    ? {
                        ...styles.imageStyles,
                        height: screen.height - 120,
                        ...imageStyles,
                      }
                    : { ...styles.imageStyles, ...imageStyles }
                }
              />
              {displayName && (
                <Text style={{ ...styles.imageText, ...textStyles }}>
                  {item?.name}
                </Text>
              )}
            </ScrollView>
          );
        })}
      </ScrollView>

      {arrows && (
        <View style={{ ...arrows.containerStyles }}>
          <TouchableOpacity onPress={handlePressLeft}>
            <Image
              source={arrows.arrowLeft}
              style={{ ...arrows.arrowStyles }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressRight}>
            <Image
              source={arrows.arrowRight}
              style={{ ...arrows.arrowStyles }}
            />
          </TouchableOpacity>
        </View>
      )}

      {showThumbs && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // scrollEventThrottle={200}
          decelerationRate="fast"
          style={{ ...thumbContainerStyles }}
        >
          <TouchableOpacity
            onPress={() => horizontalScroll.current.scrollTo({ x: 0 })}
          />
          {images?.map((image, i) => (
            <TouchableOpacity
              key={image.id}
              onPress={() =>
                horizontalScroll.current.scrollTo({ x: screen.width * i })
              }
            >
              <Image
                style={{ ...styles.thumb, ...thumbStyles }}
                source={{ uri: image.url }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {children}
    </>
  );
};
