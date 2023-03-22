import * as React from 'react';
import { Alert } from 'react-native';
import { ImageGallerySwiper } from 'react-native-image-gallery-swiper';
export default function App() {
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
  const swipeUp = (item) => {
    Alert.alert('Swiping up!', 'Congrats!', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed', item),
      },
    ]);
  };
  const swipeDown = (item) => {
    Alert.alert('Swiping down!', 'Congrats!', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed', item),
      },
    ]);
  };
  return React.createElement(ImageGallerySwiper, {
    images: images,
    swipeUp: swipeUp,
    swipeDown: swipeDown,
    displayName: true,
    showThumbs: true,
  });
}
