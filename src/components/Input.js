// Input.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ ...props }) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
  },
});

export default Input;
