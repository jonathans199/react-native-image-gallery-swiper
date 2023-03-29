import type { ImageStyle, TextStyle, ImageSourcePropType } from 'react-native';

export interface TImages {
  id: number | string;
  name?: string;
  url?: string;
  imageUrl?: string;
}

interface TArrows {
  arrowRight: ImageSourcePropType;
  arrowLeft: ImageSourcePropType;
  arrowStyles: ImageStyle;
  containerStyles: ImageStyle;
}
export interface TProps {
  images: TImages[];
  swipeDown?: Function;
  swipeUp?: Function;
  displayName?: boolean;
  textStyles?: TextStyle;
  imageStyles?: ImageStyle;
  showThumbs?: boolean;
  showArrows?: boolean;
  thumbStyles?: ImageStyle;
  getSwipedImage?: Function;
  activeImage?: number;
  arrows?: TArrows;
}
