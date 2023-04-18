import {useState} from "react"
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




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
  });