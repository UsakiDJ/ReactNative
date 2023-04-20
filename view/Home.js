import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { Button } from "react-native-paper"
import * as NavigationBar from 'expo-navigation-bar';

  





    
    const Home = ({navigation}) => {

      const [text, setText] = useState("") 


      

      return(

        

        <View style={styles.container}>
          <Text>Hello World</Text>
          <TextInput
          label="Text"
          value={text}
          onChangeText={text => setText(text)}
          />
          <StatusBar style="auto" />
        </View>



    
    
        )


       
    }

    export default Home;



    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
 