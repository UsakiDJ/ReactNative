import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
    
    const Home = ({navigation}) => {

      const [text, setText] = useState("") 
     
      return(

        <View style={styles.container}>
          <Text style={styles.paragraph} color="white">Hello World</Text>
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
        backgroundColor: '#293133',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#F2F3F5",
        
        
      },

      paragraph: {
        color:"#F2F3F5",
        fontWeight:"bold"

      }
    });
 