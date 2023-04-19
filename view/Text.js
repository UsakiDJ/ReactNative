import * as FileSystem from 'expo-file-system'
import { readAsStringAsync} from 'expo-file-system'
 


export const writeFile = async (data) => {
    // verifier le contenu de data 
    try {
        // verifier si le fichier est vide 
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
        if (fileInfo.exists) {
            // lire le fichier, et recuperer les donnees existantes
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
            // trouver un moyen pour ajouter le contenu passe en param au contenu existant
            const cocat = fileContent + " " + data
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', cocat)
            console.log(fileContent)
        } else {

            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
       }
    } catch (error) {
        console.log('erreur non catche writefile util.js: ', error)
    }
}