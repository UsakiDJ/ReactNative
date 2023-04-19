import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { writeFile } from "./Text";
import * as FileSystem from 'expo-file-system'


const Exo = () => {

  const [text, setText] = useState("")

 const addHandlerText = async () => {

    await writeFile(text)
    const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
    console.log('file info in addTodoHandler: ', fileInfo)


  }
  
  return(
    <View style={styles.container}>
      <Text>Deuxieme Page</Text>
      <TextInput
      label="Text"
      value={text}
      onChangeText={(value) => {setText(value)}}
      />

      
        <View>

          <Button
          style={styles.button}
          onPress={addHandlerText}
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
