import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
  thumbContainerStyles,
  getSwipedImage,
  activeImage,
  arrows,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const horizontalScroll = React.useRef();
  const handleVerticalSwipe = (e, item) => {
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
  const handleHorizontalSwipe = (e) => {
    const currentImageIndex = Math.round(
      e.nativeEvent.contentOffset.x / screen.width
    );
    setSelectedIndex(currentImageIndex);
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
        onScroll: handleHorizontalSwipe,
        scrollEventThrottle: 200,
        contentOffset: {
          x: activeImage ? screen.width * activeImage : 0,
          y: 0,
        },
      },
      images?.map((item, index) => {
        return React.createElement(
          ScrollView,
          {
            scrollEventThrottle: 200,
            key: index,
            onScrollEndDrag: (e) => handleVerticalSwipe(e, item),
          },
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
    arrows &&
      React.createElement(
        View,
        { style: { ...arrows.containerStyles } },
        React.createElement(
          TouchableOpacity,
          { onPress: handlePressLeft },
          React.createElement(Image, {
            source: arrows.arrowLeft,
            style: { ...arrows.arrowStyles },
          })
        ),
        React.createElement(
          TouchableOpacity,
          { onPress: handlePressRight },
          React.createElement(Image, {
            source: arrows.arrowRight,
            style: { ...arrows.arrowStyles },
          })
        )
      ),
    showThumbs &&
      React.createElement(
        ScrollView,
        {
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          // scrollEventThrottle={200}
          decelerationRate: 'fast',
          style: { ...thumbContainerStyles },
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
      ),
    children
  );
};
