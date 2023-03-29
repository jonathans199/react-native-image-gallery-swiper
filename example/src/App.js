import * as React from 'react';
import { View, Text } from 'react-native';
import { ImageGallerySwiper } from 'react-native-image-gallery-swiper';
export default function App() {
  const [swipedImage, setSwipedImage] = React.useState();
  const images = [
    {
      id: 1,
      url: 'https://source.unsplash.com/random?sig=1',
      name: 'cool pic 1',
    },
    {
      id: 2,
      url: 'https://source.unsplash.com/random?sig=2',
      name: 'cool pic 2',
    },
    {
      id: 3,
      url: 'https://source.unsplash.com/random?sig=3',
      name: 'cool pic 3',
    },
    {
      id: 4,
      url: 'https://source.unsplash.com/random?sig=4',
      name: 'cool pic 4',
    },
    {
      id: 5,
      url: 'https://source.unsplash.com/random?sig=5',
      name: 'cool pic 5',
    },
  ];
  console.log('swipedImage ->', swipedImage);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      ImageGallerySwiper,
      {
        images: images,
        swipeUp: () => console.log('up'),
        swipeDown: () => console.log('down'),
        displayName: true,
        showThumbs: true,
        getSwipedImage: setSwipedImage,
        activeImage: 2,
        arrows: {
          arrowRight: require('../assets/SkipRight.png'),
          arrowLeft: require('../assets/SkipLeft.png'),
          arrowStyles: {
            // backgroundColor: 'gray',
            height: 30,
            width: 30,
            borderRadius: 10,
          },
          containerStyles: {
            width: '100%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            marginTop: 300,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          },
        },
      },
      React.createElement(
        View,
        null,
        React.createElement(Text, null, ' Children will show here ')
      )
    )
  );
}
