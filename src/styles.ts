import { StyleSheet } from 'react-native';
import { screen } from './utils';

export const styles = StyleSheet.create({
  imageStyles: {
    width: screen.width,
    height: screen.height,
  },
  imageText: {
    textAlign: 'center',
    bottom: screen.height - 750,
    fontSize: 20,
    marginHorizontal: 50,
    paddingVertical: 10,
    color: '#fefefe',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  thumb: {
    borderRadius: 5,
    height: screen.height / 10,
    width: screen.width / 5,
    marginTop: 10,
    marginRight: 0,
    marginBottom: 30,
    marginLeft: 10,
  },
});
