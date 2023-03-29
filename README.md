# react-native-image-gallery-swiper

A simple React Native component to render image gallery with common gestures like swiping up/down or swiping left/right to navigate to next image, as well as thumbnails for easy image navigation. 

<br/>
Supporting EXPO & vanilla React Native for both iOS and Android.

![react native image gallery swiper](./react-native-image-gallery-swiper-demo.gif)
![react native image gallery swiper](./react-native-image-gallery-swiper-demo2.gif)

Built and similar to `react-native-gallery-swiper`.

# Getting started

```bash
# with npm
$ npm install react-native-image-gallery-swiper

# with yarn
$ yarn add react-native-image-gallery-swiper
```

# Usage

```js
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

  return (
    <>
      <ImageGallerySwiper
        images={images}
        swipeUp={() => console.log('up')}
        swipeDown={() => console.log('down')}
        displayName
        showThumbs
        getSwipedImage={setSwipedImage}
        activeImage={2}
        arrows={{
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
        }}
        // setHandlePressRight={handlePressRight}
        // textStyles={{ fontSize: 20, color: 'white', backgroundColor: 'green' }}
        // imageStyles={{ height: 300 }}
      >
        <View>
          <Text> Children will show here </Text>
        </View>
      </ImageGallerySwiper>
    </>
  );
}

```

<br/>

# :books: Props

| Props                     | Description                                                                                                                                                                                         | Type                       | Default  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- |
| `images`                  | An array of objects. With `id`, `url` or `imageUrl` is a required field. <br/> Example. `[ { uri: "https://source.unsplash.com/random?sig=1"}, { uri: "https://source.unsplash.com/random?sig=2"}]` | `Array`                    | Required |
| `swipeUp`                 | Function to pass for when swiping up an image                                                                                                                                                       | `Function`                 | Optional |
| `swipeDown`               | Function to pass for when swiping down an image                                                                                                                                                     | `Function`                 | Optional |
| `displayName`             | Text component with name of image to show on top of image                                                                                                                                           | `Boolean`                  | Optional |
| `textStyle`               | Styling the Display Name. <br/> Example: `textStyles={{ fontSize: 20, color: 'white' }}`                                                                                  | `object` type `TextStyle`  | Optional |
| `imageStyles`             | Styling the images within the array. <br/> Example: `imageStyles={{ height: 300 }}`                                                                                                                 | `object` type `ImageStyle` | Optional |
| `showThumbs`              | To show thumbnails under the main image`                                                                                                                                                            | `boolean`                  | Optional |                                                                                                                                                                                     |
| `thumbStyles`             | Styling the thumbs within the array. <br/> Example: `thumbStyles={{ borderRadius: 10 }}`                                                                                                             | `object` type `ImageStyle` | Optional |
`getActiveImage`             | To get active image sent back to the parent component <br/> Example: `setActiveImage={getActiveImage}`                                                                                                             | `function` type | Optional |
`activeImage`             | To set active image index <br/> Example: `activeImage={4}`                                                                                                             | `number` type | Optional |
`arrows`             | To set arrow images and styles <br/> Example: ` arrows={{arrowRight: require('../assets/SkipRight.png'), arrowLeft: require('../assets/SkipLeft.png'), arrowStyles: {}`                                                                                                             | `object` type | Optional |

<br/>
<br/>
<br/>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
