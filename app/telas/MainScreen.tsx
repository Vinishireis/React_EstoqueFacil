import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const MainScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Selecione uma opção:</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigate('CondominiumRegistration')}>
        <Text style={styles.buttonText}>Cadastrar Condomínio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigate('UserRegistration')}>
        <Text style={styles.buttonText}>Cadastrar Usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigate('InformationManagement')}>
        <Text style={styles.buttonText}>Gerenciar Informações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#00b0ff',
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainScreen;
