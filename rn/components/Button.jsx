import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, onPress, style, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...props}>
      <Text style={styles.buttonText}>{title || 'Click Here'}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: '#EB540A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 44,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
};

export default Button;
