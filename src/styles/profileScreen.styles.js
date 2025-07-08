import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    fontWeight:'600'
  },
  input: {
    width: '98%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    height: width * 0.12,
  },
  error: {
    color:COLORS.red,
    fontSize: 13,
    marginBottom: 10,
    alignSelf: 'flex-start',
    fontWeight:'bold',
  },
  button: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 14,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
    marginTop: height*0.06,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop:12
  },
});
