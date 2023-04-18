import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as FileSystem from "expo-file-system"





const Exo = ({navigation}) => {

  const [text, setText] = useState("") 

  
  return(
    <View style={styles.container}>
      <Text>Deuxieme Page</Text>
      <TextInput
      label="Text"
      value={text}
      onChangeText={text => setText(text)}
      />


      
        <View>

          <Button
          style={styles.button}
          onPress={() => {navigation.navigate('Home')}}
          title='Enregistrer le texte' />
          </View>
      <StatusBar style="auto" />
    </View>


    )
}

export default Exo;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: "#AB14FF",
    }
  });
