import * as React from 'react';

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

  return (
    <ImageGallerySwiper
      images={images}
      swipeUp={() => console.log('up')}
      swipeDown={() => console.log('down')}
      displayName
      showThumbs
      getSwipedImage={setSwipedImage}
      activeImage={2}
      // textStyles={{ fontSize: 20, color: 'white', backgroundColor: 'green' }}
      // imageStyles={{ height: 300 }}
    />
  );
}
