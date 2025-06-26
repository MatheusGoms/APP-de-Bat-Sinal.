import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700', // Cor dourada
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    color: '#000', // Cor preta
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
