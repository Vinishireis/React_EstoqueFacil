import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

interface Order {
  id: string;
  image: any;
  title: string;
  date: string;
  recipient: string;
  time: string;
}

interface OrderDetailsScreenProps {
  route: RouteProp<{ params: { order: Order } }, 'params'>;
}

const OrderDetailsScreen: React.FC<OrderDetailsScreenProps> = ({ route }) => {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes do Pedido</Text>
      <Text>Pedido: {order.title}</Text>
      <Text>Horário: {order.time}</Text>
      <Text>Destinatário: {order.recipient}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default OrderDetailsScreen;
