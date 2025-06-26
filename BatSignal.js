import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BatSignal = ({ isActive }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bat-signal.png')}
        style={[
          styles.signal,
          { opacity: isActive ? 1 : 0.5 }, // Controla o brilho do sinal
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signal: {
    width: 200,
    height: 200,
  },
});

export default BatSignal;
