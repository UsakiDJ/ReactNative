import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./view/Home"
import Exo from "./view/Exo"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import {useEffect, useState} from "react"
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  const visibility = NavigationBar.useVisibility()
  console.log(visibility)
  const setVisibility =   () => {
   NavigationBar.setVisibilityAsync("hidden")

  }

  useEffect( ()=> { 
    setVisibility();

   }, [])


  
  return (

    

    <NavigationContainer>
      <Tab.Navigator> 
        <Tab.Screen name="Accueil" component={Home} options={{title: "Accueil", headerShown:false}}/>
        <Tab.Screen name="Exo" component={Exo} options={{title: "Exercice"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
 title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});