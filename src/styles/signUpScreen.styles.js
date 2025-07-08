import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.08,
  },
  title: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: width * 0.032,
    color: COLORS.black,
    marginBottom: height * 0.03,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: height * 0.03,
  },
  tagline: {
    fontSize: width * 0.035,
    color: '#000',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: width * 0.04,
    marginBottom: 10,
  },
  error: {
    color: COLORS.red,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: width * 0.035,
    color: COLORS.black,
    marginVertical: 6,
  },
  whatsappButton: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  whatsappText: {
    fontSize: width * 0.038,
    color: '#000',
    fontWeight: '500',
  },
  sendButton: {
    width: '45%',
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:height*0.1
  },
  sendButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  privacyText: {
    fontSize: width * 0.032,
    color: COLORS.black,
    marginTop: 14,
  },
});