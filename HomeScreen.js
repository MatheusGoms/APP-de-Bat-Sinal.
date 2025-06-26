import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BatSignal from '../components/BatSignal';
import Button from '../components/Button';

const HomeScreen = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBatSignal = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <BatSignal isActive={isActive} />
      <Button
        title={isActive ? 'Desativar Sinal' : 'Ativar Sinal'}
        onPress={toggleBatSignal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
