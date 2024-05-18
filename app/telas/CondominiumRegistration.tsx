import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

const CondominiumRegistration = () => {
  const navigation = useNavigation();
  const [condoData, setCondoData] = useState({
    name: '',
    address: '',
    area: '',
    managerName: '',
    managerContact: '',
  });

  const handleRegister = () => {
    // Lógica para enviar dados para o servidor ou armazenar localmente
    console.log('Dados do Condomínio:', condoData);

    // Navegar para a tela principal após o registro, passando o nome do condomínio como parâmetro
    navigation.navigate('CondominiumsDetails', { newCondo: condoData });
  };

  return (
    <ImageBackground source={require('../../assets/IMG/background.png')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nome do Condomínio:</Text>
        <TextInput
          style={styles.input}
          value={condoData.name}
          onChangeText={(text) => setCondoData({ ...condoData, name: text })}
          placeholder="Digite o nome do condomínio"
        />

        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={condoData.address}
          onChangeText={(text) => setCondoData({ ...condoData, address: text })}
          placeholder="Digite o endereço"
        />

        <Text style={styles.label}>Área:</Text>
        <TextInput
          style={styles.input}
          value={condoData.area}
          onChangeText={(text) => setCondoData({ ...condoData, area: text })}
          placeholder="Digite a área"
        />

        <Text style={styles.label}>Nome do Gerente:</Text>
        <TextInput
          style={styles.input}
          value={condoData.managerName}
          onChangeText={(text) => setCondoData({ ...condoData, managerName: text })}
          placeholder="Digite o nome do gerente"
        />

        <Text style={styles.label}>Contato do Gerente:</Text>
        <TextInput
          style={styles.input}
          value={condoData.managerContact}
          onChangeText={(text) => setCondoData({ ...condoData, managerContact: text })}
          placeholder="Digite o contato do gerente"
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 2)', 
    padding: 16,
    borderRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center', // Centraliza o texto do título
  },
  label: {
    fontSize: 18,
    marginBottom: 2,
    textAlign: 'center', // Centraliza o texto do label
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00b0ff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CondominiumRegistration;
