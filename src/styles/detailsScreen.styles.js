import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.Background,
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  helperText: {
    fontSize: 12,
    fontWeight: '400',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '45%',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#000',
  },
  activeText: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 14,
    borderRadius: 8,
    width: 160,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
  },
  skipText: {
    marginTop: 15,
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 40,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
});