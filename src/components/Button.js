// components/Button.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1c1c1c',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Button;
