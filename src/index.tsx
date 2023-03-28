import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

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
  getSwipedImage,
  activeImage,
}: TProps) => {
  const horizontalScroll = React.useRef<any>();
  const handleVerticalSwipe = (e: any, item: TImages) => {
    getSwipedImage && getSwipedImage(item);
    if (swipeDown && e.nativeEvent.contentOffset.y < 0) swipeDown(item);
    if (swipeUp && e.nativeEvent.contentOffset.y > 0) swipeUp(item);
  };

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={horizontalScroll}
        contentOffset={{
          x: activeImage ? screen.width * activeImage : 0,
          y: 0,
        }}
      >
        {images?.map((item: TImages, index: number) => {
          return (
            <ScrollView
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
      {showThumbs && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
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
    </>
  );
};
