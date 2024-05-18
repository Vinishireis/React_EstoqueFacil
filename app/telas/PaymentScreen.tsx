import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [paymentData, setPaymentData] = useState({
    amount: '',
    description: '',
    date: '',
  });

  const handleSavePayment = () => {
    // Lógica para salvar os dados do pagamento
    console.log('Dados do pagamento:', paymentData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  };

  const handleBack = () => {
    navigation.navigate('InformationManagement');
  };

  return (
    <ImageBackground source={require('../../assets/IMG/background.png')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pagamento</Text>

        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          value={paymentData.amount}
          onChangeText={(text) => setPaymentData({ ...paymentData, amount: text })}
          placeholder="Digite o valor"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          value={paymentData.description}
          onChangeText={(text) => setPaymentData({ ...paymentData, description: text })}
          placeholder="Digite a descrição"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Data:</Text>
        <TextInput
          style={styles.input}
          value={paymentData.date}
          onChangeText={(text) => setPaymentData({ ...paymentData, date: text })}
          placeholder="Digite a data"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleSavePayment}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
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
    width: '100%',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
