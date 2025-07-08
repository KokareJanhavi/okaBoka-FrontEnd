import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.Background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    marginBottom: height * 0.03,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});