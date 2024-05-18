import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp, FadeOut, FadeOutDown, FadeOutLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

interface Order {
  id: string;
  image: any;
  title: string;
  date: string;
}

interface CreateOrderScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const CreateOrderScreen: React.FC<CreateOrderScreenProps> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleCreateOrder = () => {
    const formattedDate = selectedDate ? selectedDate : '';

    const newOrder: Order = {
      id: Date.now().toString(),
      image: require('../../assets/IMG/pacote.png'),
      title,
      date: formattedDate,
    };

    setOrders(prevOrders => [...prevOrders, newOrder]); // Atualiza o estado usando o callback

    setTitle('');
    setDate('');
    setSelectedDate(null);

    navigation.navigate('OrdersScreen', { orders: [...orders, newOrder] });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <Calendar
        style={styles.calendar}
        current={date}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
      <Button
        style={styles.button}
        title="Cadastrar Encomenda"
        onPress={handleCreateOrder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  calendar: {
    marginBottom: 20,
  },
  button: {
    width: '80%',
    borderRadius: 25,
  },
});

export default CreateOrderScreen;
