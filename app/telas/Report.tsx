import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Report = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('InformationManagement');
  };

  return (
    <ImageBackground source={require('../../assets/IMG/background.png')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Relatório</Text>
        {/* Adicione mais conteúdo aqui conforme necessário */}
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00b0ff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Report;
