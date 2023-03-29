import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { screen } from './utils';
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
}) => {
  const horizontalScroll = React.useRef();
  const handleVerticalSwipe = (e, item) => {
    getSwipedImage && getSwipedImage(item);
    if (swipeDown && e.nativeEvent.contentOffset.y < 0) swipeDown(item);
    if (swipeUp && e.nativeEvent.contentOffset.y > 0) swipeUp(item);
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      ScrollView,
      {
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        ref: horizontalScroll,
        contentOffset: {
          x: activeImage ? screen.width * activeImage : 0,
          y: 0,
        },
      },
      images?.map((item, index) => {
        return React.createElement(
          ScrollView,
          { key: index, onScrollEndDrag: (e) => handleVerticalSwipe(e, item) },
          React.createElement(Image, {
            source: { uri: item.url || item.imageUrl },
            style: showThumbs
              ? {
                  ...styles.imageStyles,
                  height: screen.height - 120,
                  ...imageStyles,
                }
              : { ...styles.imageStyles, ...imageStyles },
          }),
          displayName &&
            React.createElement(
              Text,
              { style: { ...styles.imageText, ...textStyles } },
              item?.name
            )
        );
      })
    ),
    showThumbs &&
      React.createElement(
        ScrollView,
        {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          scrollEventThrottle: 200,
          decelerationRate: 'fast',
        },
        React.createElement(TouchableOpacity, {
          onPress: () => horizontalScroll.current.scrollTo({ x: 0 }),
        }),
        images?.map((image, i) =>
          React.createElement(
            TouchableOpacity,
            {
              key: image.id,
              onPress: () =>
                horizontalScroll.current.scrollTo({ x: screen.width * i }),
            },
            React.createElement(Image, {
              style: { ...styles.thumb, ...thumbStyles },
              source: { uri: image.url },
            })
          )
        )
      )
  );
};
