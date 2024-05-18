import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import InformationManagement from './InformationManagement';
import { Handle } from 'react-native';
import { forwardRef, useImperativeHandle } from 'react';



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
  
    const handleBack = () => {
      navigation.navigate('InformationManagement');
    };
  
    const handleEditCondo = () => {
      if (editing) {
        // Se estiver editando, cancelar a edição e voltar aos dados originais
        setEditing(false);
        // Atualizar os dados para os originais (ou buscar do servidor)
        setCondoData({
          Nome: 'Nome do Condomínio',
          Endereço: 'Endereço do Condomínio',
          Unidade: 'Unidades',
          Área: 'Área do Condomínio',
          Gerente: 'Nome do Gerente',
          Contato: 'Contato do Gerente',
        });
      } else {
        // Se não estiver editando, apenas voltar à tela anterior
        navigation.navigate('InformationManagement');
      }
    };
  
    return (
      <ImageBackground source={require('../../assets/IMG/background.png')} style={styles.container}>
        <View style={styles.content}>
          {Object.keys(condoData).map((key) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}:</Text>
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