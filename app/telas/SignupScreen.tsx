import { Text, View, StyleSheet, TextInput, Button, ActivityIndicator, Image, TouchableOpacity,  } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseSettings';
import { Auth } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp, FadeOut, FadeOutDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style='light' />
        <Image className="h-full w-full absolute" source={require('../../assets/IMG/background.png')}></Image>
      
      {/* Animações Pacote/Caminhão */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInRight.delay(200).duration(1000).springify().damping(3)} className="h-[128] w-[128]" style={{marginTop:90}} source={require('../../assets/IMG/pacote.png')} />
        <Animated.Image entering={FadeInLeft.delay(200).duration(1000).springify().damping(3)} className="h-[128] w-[128]" style={{marginTop:30}} source={require('../../assets/IMG/caminhao-de-entrega.png')} />
        </View>   

        {/* Título e Formulário*/}
        <View className="h-full w-full flex justify-around pt-40 pb-10">
          {/* Título */}
          <View className="flex items-center">
            <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-winder text-5xl">
              Inscreva-se
            </Animated.Text>
          </View>
          {/*Formulário*/}
          <View className="flex items-center mx-5 space-y-3">

          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-4 rounded-2xl w-full mb--1">
              <TextInput placeholder='Nome Completo' placeholderTextColor={'gray'}  />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
              <TextInput placeholder='Email' placeholderTextColor={'gray'} />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput placeholder='Senha' placeholderTextColor={'gray'} secureTextEntry />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="w-full">
              <TouchableOpacity
                className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Inscrever-se</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
              <Text>Já possui uma conta?</Text>
              <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text className="text-sky-600">Login</Text>
              </TouchableOpacity>
            </Animated.View>

          </View>
        </View>
    </View>
  )
}