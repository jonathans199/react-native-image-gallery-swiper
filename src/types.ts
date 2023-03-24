import type { ImageStyle, TextStyle } from 'react-native';

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
  getSwipedImage?: Function;
  activeImage?: number;
}
