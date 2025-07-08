import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as Yup from 'yup';
import styles from '../styles/signUpScreen.styles';

const phoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit number'),
});

const SignupScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = async () => {
    try {
      await phoneSchema.validate({ phoneNumber });
      setError('');
      navigation.navigate('Verification');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to okaBoka</Text>
      <Text style={styles.subtitle}>
        Connect with emotionally similar people
      </Text>

      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.tagline}>
        Let’s start with your number your world begins here.
      </Text>

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#666"
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={text => {
          const cleaned = text.replace(/[^0-9]/g, '');
          setPhoneNumber(cleaned);
        }}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.whatsappButton}>
        <Text style={styles.whatsappText}>Continue With Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
        <Text style={styles.sendButtonText}>Send Me The Code</Text>
      </TouchableOpacity>

      <Text style={styles.privacyText}>We’ll never share your number</Text>
    </View>
  );
};

export default SignupScreen;
