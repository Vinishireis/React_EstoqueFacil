import { Text, View, StyleSheet, TextInput, Button, ActivityIndicator, Image, TouchableOpacity,  } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseSettings';
import { Auth } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp, FadeOut, FadeOutDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
import { FlatList } from 'react-native';


interface Order {
  id: string;
  image: any; // Use 'any' for image type
  title: string;
  date: string;
}

interface OrdersScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { orders?: Order[] } }, 'params'>;
}

const initialOrders = [
  { id: '1', image: require('../../assets/IMG/pacote.png'), title: 'Encomenda 1', date: '2024-05-15' },
  { id: '2', image: require('../../assets/IMG/pacote.png'), title: 'Encomenda 2', date: '2024-05-16' },
  { id: '3', image: require('../../assets/IMG/pacote.png'), title: 'Encomenda 3', date: '2024-05-17' },
];

const OrdersScreen: React.FC<OrdersScreenProps> = ({ navigation, route }) => {
  const orders = route.params?.orders || initialOrders;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Encomendas</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('MainScreen', { orders })}
        >
          <Text style={styles.headerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.orderText}>Título: {item.title}</Text>
              <Text style={styles.orderText}>Data: {item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateOrderScreen', { orders })}
      >
        <Text style={styles.buttonText}>Cadastrar Encomenda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30, // Adicionado para mover o título e o botão de perfil mais para baixo
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headerButton: {
    backgroundColor: '#00b0ff',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 16,
  },
  orderText: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    backgroundColor: '#00b0ff',
    padding: 12,
    borderRadius: 50,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrdersScreen;
