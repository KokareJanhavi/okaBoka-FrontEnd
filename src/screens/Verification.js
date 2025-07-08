import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/verificationScreen.styles';

const VerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (text === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');

    if (code.includes('') || enteredCode.length < 4) {
      Alert.alert(
        'Incomplete Code',
        'Please enter all 4 digits of the verification code.',
      );
      return;
    }

    console.log('Entered OTP Code:', enteredCode);
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Verify your number</Text>
      <Text style={styles.subtitle}>We’ve sent a code to your phone</Text>

      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={text => handleCodeChange(text, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.resendBold}>Resend</Text>
      </Text>
      <Text style={styles.timerText}>
        You can request a new code in 4 seconds
      </Text>
    </View>
  );
};

export default VerificationScreen;
