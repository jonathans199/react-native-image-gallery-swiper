import * as React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export const ImageGallerySwiper = ({
  images,
  displayName,
  textStyles,
  imageStyles,
  swipeDown,
  swipeUp,
  showThumbs,
  thumbStyles,
}) => {
  const horizontalScroll = React.useRef();
  const handleVerticalSwipe = (e, item) => {
    console.log('e -> ', e);
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
      },
      images?.map((item, index) => {
        return React.createElement(
          ScrollView,
          {
            key: index,
            onScrollEndDrag: (e) => handleVerticalSwipe(e, item),
            // get current item
            onScrollBeginDrag: (item) => console.log('item ->', item),
          },
          React.createElement(Image, {
            source: { uri: item.url || item.imageUrl },
            style: { ...styles.imageStyles, ...imageStyles },
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
                horizontalScroll.current.scrollTo({ x: screenWidth * i }),
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
const styles = StyleSheet.create({
  imageStyles: {
    width: screenWidth,
    height: screenHeight,
  },
  imageText: {
    textAlign: 'center',
    bottom: screenHeight - 750,
    fontSize: 20,
    marginHorizontal: 50,
    paddingVertical: 10,
    color: '#fefefe',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  thumb: {
    borderRadius: 5,
    height: screenWidth / 5,
    width: screenWidth / 5,
    marginTop: 10,
    marginRight: 0,
    marginBottom: 30,
    marginLeft: 10,
  },
});
