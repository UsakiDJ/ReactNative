import * as MailComposer from 'expo-mail-composer';

export const Mail = async (file) => {

    console.log("sauce")
    const MailComp = {
        attachments: [file]
    }


    await MailComposer.composeAsync(MailComp)

};
