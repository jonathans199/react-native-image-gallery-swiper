import { Dimensions } from 'react-native';
export const screen = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),
};
