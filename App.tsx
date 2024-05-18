// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from 'firebase/auth';
import LoginScreen from './app/telas/LoginScreen';
import SignupScreen from './app/telas/SignupScreen';
import OrdersScreen from './app/telas/OrdersScreen';
import CreateOrderScreen from './app/telas/CreateOrderScreen';
import OrderItem from './app/telas/OrdersItem';
import CondominiumRegistration from './app/telas/CondominiumRegistration';
import InformationManagement from './app/telas/InformationManagement';
import MainScreen from './app/telas/MainScreen';
import UserRegistration from './app/telas/UserRegistration';
import CondominiumsDetails from './app/telas/CondominiumsDetails';
import UserDetails from './app/telas/UserDetails';
import Report from './app/telas/Report';
import PaymentScreen from './app/telas/PaymentScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="CreateOrderScreen" component={CreateOrderScreen} options={{ title: 'Cadastrar Encomenda' }} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'Novas Encomendas' }} />
        <Stack.Screen name="OrderItem" component={OrderItem}  />
        <Stack.Screen name="CondominiumRegistration" component={CondominiumRegistration}  />
        <Stack.Screen name='CondominiumsDetails' component={CondominiumsDetails} />
        <Stack.Screen name="InformationManagement" component={InformationManagement}  />
        <Stack.Screen name="MainScreen" component={MainScreen}  />
        <Stack.Screen name='UserRegistration' component={UserRegistration} />
        <Stack.Screen name='UserDetails' component={UserDetails} />
        <Stack.Screen name='Report' component={Report} />
        <Stack.Screen name='Payment' component={PaymentScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;