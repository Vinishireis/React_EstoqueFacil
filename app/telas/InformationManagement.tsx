import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationAction } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const InformationManagement = () => {
  const navigation = useNavigation();
  const condoData = {
    name: 'Exemplo Condomínio', // Substitua isso pelos dados reais do condomínio
    address: 'Endereço Exemplo',
    area: 'Área Exemplo',
    managerName: 'Nome do Gerente Exemplo',
    managerContact: 'Contato do Gerente Exemplo',
  };

const handleEditCondo = () => {
  navigation.navigate('CondominiumsDetails', { newCondo: condoData });
};
  const handleEditUsers = () => {
    navigation.navigate('UserDetails', { newCondo: condoData });
  };

  const handleViewReports = () => {
   navigation.navigate('Report', {newCondo: condoData});
  };

  const handleManagePayments = () => {
   navigation.navigate('Payment', {newCondo: condoData});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Informações</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditCondo}>
        <Text style={styles.buttonText}>Editar Condomínio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleEditUsers}>
        <Text style={styles.buttonText}>Editar Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewReports}>
        <Text style={styles.buttonText}>Visualizar Relatórios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleManagePayments}>
        <Text style={styles.buttonText}>Gerenciar Pagamentos</Text>
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
  button: {
    backgroundColor: '#00b0ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InformationManagement;
