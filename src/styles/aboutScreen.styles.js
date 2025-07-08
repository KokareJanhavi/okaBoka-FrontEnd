import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#35c1a7',
    padding: 20,
    alignItems: 'center',
  },
  backButtonWrapper: {
    alignSelf: 'flex-start',
  },
  backButton: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 9,
    color: '#000',
    marginTop:23
  },
  dobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  dobInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  genderBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  genderSelected: {
    backgroundColor: '#000',
  },
  genderText: {
    color: '#000',
  },
  genderTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  locationInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  subText: {
    alignSelf: 'flex-start',
    fontSize: 13,
    color: 'red',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '45%',
    marginTop: height*0.2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  footerText: {
    fontSize: 15,
    color: '#000',
    marginTop: 15,
    textAlign: 'center',
    fontWeight:'600'
  },
});