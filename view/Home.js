import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { Button } from "react-native-paper"
  
    
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

          <View>
          <Button
          onPress={() => {navigation.navigate('Exo')}}
          title='Go to second page'
          buttonColor="red"
          textColor="white"
          mode="contained"
          contentStyle="flexDirection">
            Salut
          </Button>
          </View>


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
 