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
import * as React from 'react'
import { ImageGallerySwiper } from 'react-native-image-gallery-swiper';

const images = [
  {
    id: 1,
    url: 'https://source.unsplash.com/random?sig=1',
    name: 'Cool Pic 1',
  },
  {
    id: 2,
    url: 'https://source.unsplash.com/random?sig=2',
    name: 'Cool Pic 2',
  },
  {
    id: 3,
    url: 'https://source.unsplash.com/random?sig=3',
    name: 'Cool Pic 3',
  },
  {
    id: 4,
    url: 'https://source.unsplash.com/random?sig=4',
    name: 'Cool Pic 4',
  },
  {
    id: 5,
    url: 'https://source.unsplash.com/random?sig=5',
    name: 'Cool Pic 5',
  },
];

export default function App() {
  const [activeImage, getActiveImage] = React.UseState() 

  console.log('activeImage ->', activeImage)

  return (
    <ImageGallerySwiper
      images={images} // required

      // the rest of props are optional 👇
      imageStyles={{ height: 300 }}
      swipeUp={() => console.log('up')}
      swipeDown={() => console.log('down')}
      showThumbs
      displayName
      textStyles={{ fontSize: 20, color: 'white', backgroundColor: 'green' }}
      setActiveImage={getActiveImage}
    />
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
`setActiveImage`             | To get active image sent back to the parent component <br/> Example: `setActiveImage={getActiveImage}`                                                                                                             | `function` type | Optional |

<br/>
<br/>
<br/>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
