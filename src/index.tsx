import React from 'react';
import {
  StyleSheet,
  Image,
  ImageStyle,
  ScrollView,
  Dimensions,
  Text,
  TextStyle,
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
  swipeDown: Function;
  swipeUp: Function;
  displayName?: boolean;
  textStyles?: TextStyle;
  imageStyles?: ImageStyle;
}

export const ImageGallerySwiper = (props: TProps) => {
  const handleVerticalSwipe = (e: any, item: any) => {
    const { swipeDown, swipeUp } = props;
    if (e.nativeEvent.contentOffset.y < 0) {
      swipeDown(item);
    } else {
      swipeUp(item);
    }
  };

  const { images, displayName, textStyles, imageStyles } = props;

  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      {images?.map((item: any, index: number) => {
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
});
