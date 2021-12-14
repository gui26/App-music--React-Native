import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Routes  from './Routes/Routes';
import { useFonts } from 'expo-font';
export default function App() {
  
  return (
    <View  style={{
      flex: 1,
      
    }}>

      
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      
      
      <Routes/>
      
    </View>
  )
}