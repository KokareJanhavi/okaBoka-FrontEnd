import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#35c1a7',
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    paddingTop: height * 0.08,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: height * 0.04,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: width * 0.035,
    color: '#000',
    marginBottom: height * 0.035,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 25,
  },
  codeInput: {
    backgroundColor: '#fff',
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: width * 0.05,
    color: '#000',
  },
  verifyButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
     marginTop:height*0.05
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  resendText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 28,
  },
  resendBold: {
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop:12
  },
});