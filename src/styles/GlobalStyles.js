import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const wp = percent => (width * percent) / 100;
const hp = percent => (height * percent) / 100;
const sp = size => (width / 375) * size;

export const COLORS = {
  Background: '#35c1a7',
  darkBlue: '#1B3C73',
  accent: '#055b66',
  white: '#ffffff',
  black: '#000000',
  lightGray: '#e8f4fa',
  borderGray: '#9bbdc1',
  backgroundLight: '#dee4f3',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  red: '#ff4d4f',
  shadow: '#000',
  grey: '#999',
  darkGrey: '#333333',
};



const GlobalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#35c1a7',
    padding: wp(6),
    justifyContent: 'center',
  },
 
});

export default GlobalStyles;
