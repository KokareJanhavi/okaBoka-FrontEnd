// screens/ProfileNameScreen.js

import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Yup from 'yup';
import { styles } from '../styles/profileScreen.styles';

const nameSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Please enter your name')
    .min(2, 'Too short')
    .max(30, 'Too long'),
});

const ProfileNameScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    try {
      await nameSchema.validate({ fullName });
      setError('');
      navigation.navigate('AboutYou');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image
        source={require('../../assets/Profile.png')}
        style={styles.profileImage}
      />
      <Text style={styles.title}>What should we call you?</Text>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#aaa"
        value={fullName}
        onChangeText={setFullName}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Lets Get To Know You</Text>
      </TouchableOpacity>

      <Text style={styles.subtext}>Your safety is our priority</Text>
    </KeyboardAvoidingView>
  );
};

export default ProfileNameScreen;
