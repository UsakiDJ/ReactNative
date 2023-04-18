import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./view/Home"
import Exo from "./view/Exo"

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Accueil" component={Home} options={{title: "Accueil"}}/>
        <Stack.Screen name="Exo" component={Exo} options={{title: "Exercice"}}/>
      </Stack.Navigator>
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