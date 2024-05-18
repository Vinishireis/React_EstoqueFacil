import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserDetails = () => {
  const navigation = useNavigation();
  const [condoData, setCondoData] = useState({
    Nome: 'Nome do Condomínio',
    Endereço: 'Endereço do Condomínio',
    Unidade: 'Unidades',
    Área: 'Área do Condomínio',
    Gerente: 'Nome do Gerente',
    Contato: 'Contato do Gerente',
  });
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // Lógica para salvar os dados editados
    setEditing(false);
  };

  const handleEditCondo = () => {
    navigation.navigate('CondominiumsDetails', { newCondo: condoData });
  };

  return (
    <ImageBackground source={require('../../assets/IMG/background.png')} style={styles.container}>
      <View style={styles.content}>
        {Object.keys(condoData).map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={condoData[key]}
                onChangeText={(text) => setCondoData({ ...condoData, [key]: text })}
              />
            ) : (
              <Text style={styles.text}>{condoData[key]}</Text>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => setEditing(!editing)}>
          <Text style={styles.buttonText}>{editing ? 'Salvar' : 'Editar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditCondo}>
          <Text style={styles.buttonText}>Salvar</Text>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    flex: 2,
    fontSize: 16,
    marginLeft: 10,
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

export default UserDetails;
