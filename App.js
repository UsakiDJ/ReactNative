import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./view/Home"
import Exo from "./view/Exo"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as NavigationBar from 'expo-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function App() {

  //Tentative d'utilisation de NavigationBar pour cacher la NavBar

  /*const visibility = NavigationBar.useVisibility()
  console.log(visibility)
  const setVisibility =   () => {
   NavigationBar.setVisibilityAsync("hidden")


  }

  useEffect( ()=> { 
    setVisibility();

   }, [])

*/
  
  return (


    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: "#212729",
                tabBarInactiveBackgroundColor:"#A9A9A9",
              })}> 

        <Tab.Screen name="Accueil" component={Home} options={{title: "Accueil", headerShown:false, tabBarBadge: 3}}/>
        <Tab.Screen name="Exo" component={Exo} options={{title: "Exercice", headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
 title: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});