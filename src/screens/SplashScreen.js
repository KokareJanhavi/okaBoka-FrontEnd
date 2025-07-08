import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/splashScreen.styles';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUp');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>OkaBoka</Text>
    </View>
  );
};
export default SplashScreen;
