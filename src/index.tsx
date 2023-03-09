import * as React from 'react';
import {
  StyleSheet,
  Image,
  ImageStyle,
  ScrollView,
  Dimensions,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export interface TImages {
  id: number | string;
  name?: string;
  url?: string;
  imageUrl?: string;
}
export interface TProps {
  images: TImages[];
  swipeDown?: Function;
  swipeUp?: Function;
  displayName?: boolean;
  textStyles?: TextStyle;
  imageStyles?: ImageStyle;
  showThumbs?: boolean;
  thumbStyles?: ImageStyle;
}

export const ImageGallerySwiper = ({
  images,
  displayName,
  textStyles,
  imageStyles,
  swipeDown,
  swipeUp,
  showThumbs,
  thumbStyles,
}: TProps) => {
  const horizontalScroll = React.useRef<any>();
  const handleVerticalSwipe = (e: any, item: TImages) => {
    if (swipeDown && e.nativeEvent.contentOffset.y < 0) swipeDown(item);
    if (swipeUp && e.nativeEvent.contentOffset.y > 0) swipeUp(item);
  };

  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={horizontalScroll}
      >
        {images?.map((item: TImages, index: number) => {
          return (
            <ScrollView
              key={index}
              onScrollEndDrag={(e) => handleVerticalSwipe(e, item)}
            >
              <Image
                source={{ uri: item.url || item.imageUrl }}
                style={{ ...styles.imageStyles, ...imageStyles }}
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
                horizontalScroll.current.scrollTo({ x: screenWidth * i })
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
