import * as React from 'react';

import { Alert } from 'react-native';
import { ImageGallerySwiper } from 'react-native-image-gallery-swiper';

export default function App() {
  const images = [
    { id: 1, url: 'https://source.unsplash.com/random?sig=1', name: 'test 1' },
    { id: 2, url: 'https://source.unsplash.com/random?sig=2', name: 'test 2' },
    { id: 3, url: 'https://source.unsplash.com/random?sig=3', name: 'test 3' },
    { id: 4, url: 'https://source.unsplash.com/random?sig=4', name: 'test 4' },
    { id: 5, url: 'https://source.unsplash.com/random?sig=5', name: 'test 5' },
  ];

  const swipeUp = (item: string) => {
    Alert.alert('Swiping up!', 'Congrats!', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed', item),
      },
    ]);
  };

  const swipeDown = (item: string) => {
    console.log('swiping bottom ->', item);
  };

  return (
    <ImageGallerySwiper
      images={images}
      swipeUp={swipeUp}
      swipeDown={swipeDown}
      displayName
      textStyles={{ fontSize: 20, color: 'white', backgroundColor: 'green' }}
      imageStyles={{ height: 300 }}
    />
  );
}
