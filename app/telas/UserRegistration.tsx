import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const UserRegistration = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    unit: '',
  });

  const handleRegister = () => {
    // Lógica para enviar dados para o servidor ou armazenar localmente
    console.log('Dados do Usuário:', userData);
    // Exemplo de lógica de registro: enviar os dados para o servidor
    fetch('http://example.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta do servidor:', data);
        // Lógica adicional após o registro, como navegar para outra tela
      })
      .catch((error) => {
        console.error('Erro ao registrar usuário:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      
      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
        value={userData.fullName}
        onChangeText={(text) => setUserData({ ...userData, fullName: text })}
        placeholder="Digite seu nome completo"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        placeholder="Digite seu email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={userData.phone}
        onChangeText={(text) => setUserData({ ...userData, phone: text })}
        placeholder="Digite seu telefone"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        style={styles.input}
        value={userData.role}
        onChangeText={(text) => setUserData({ ...userData, role: text })}
        placeholder="Digite seu cargo"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Unidade:</Text>
      <TextInput
        style={styles.input}
        value={userData.unit}
        onChangeText={(text) => setUserData({ ...userData, unit: text })}
        placeholder="Digite sua unidade"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00b0ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserRegistration;