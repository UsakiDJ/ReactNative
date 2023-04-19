import * as MailComposer from 'expo-mail-composer';

export const Mail = async (file) => {

    /// Mise en place des options pour préparer l'envoi du mail
    const MailComp = {
        attachments: [file]
    }

    //Ouverture de l'application Mail avec les options configurés plus haut. 
    await MailComposer.composeAsync(MailComp)

};
