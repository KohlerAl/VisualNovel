namespace AMurderMystery {

    export async function Scene2_2(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene2_2 starting");

        let text = {
            protagonist: {
                T00: "Das … das ist doch der Mord aus meinem Buch? Jemand stellt einen Mord aus meinem Buch dar? Vielleicht sollte ich Ash schreiben?"
            },
            notification: {
                vampire: "Im Londoner Hide Park wurde die Leiche einer jungen Frau gefunden. Die Kehle des Opfers weist Bissspuren auf. Das Opfer lag auf einem Bett aus Rosen. Die Polizei bittet die Bevölkerung um Hinweise.",
                ritual: "Im Londoner Hide Park wurde die Leiche einer jungen Frau gefunden. Der Tatort weist Spuren eines rituellen oder religiösen Motivs auf. Die Polizei bittet die Bevölkerung um Hinweise."
            },
            choiceTextAsh: {
                yes: "Ja",
                no: "Nein"
            },
            textToAsh: {
                neutral: "Ich habe gerade die Nachrichten gesehen, und jemand hat eins meiner Bücher nachgestellt, nachdem wir gestern noch darüber geredet haben. Was für ein komischer Zufall, oder?",
                friendly: "Ich habe gerade in den Nachrichten gesehen, dass jemand einen meiner Morde nachstellt. Wer würde denn so etwas machen?",
                accusing: "Wir haben doch gestern noch über mein Lieblingsbuch geredet und heute wird genau dieser Mord nachgestellt? Das kann doch kein Zufall sein. Hast du etwas damit zu tun?"
            },
            ashAnswers: {
                neutralAnswer: "Ich habs auch grade gesehen. Wirklich ein komischer Zufall.",
                friendlyAnswer: "Ich weiß es nicht. Aber ich bin mir sicher, die Polizei wird sich darum kümmern und den Mörder finden.",
                accusingAnswer: "..."
            }
        }


        characters.Protagonist.name = dataForSave.nameProtagonist;
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
        await ƒS.Location.show(locations.Phone);
        await ƒS.update(transition.transition1.duration, transition.transition1.alpha, transition.transition1.edge);

        ƒS.Sound.fade(sound.smartphoneRing, 20, 10, false);
        switch (dataForSave.chosenBook) {
            case "Vampire":
                await ƒS.Speech.tell("Phone", text.notification.vampire);
                break;

            case "Ritual":
                await ƒS.Speech.tell("Phone", text.notification.ritual);
                break;
        }

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);



        let thirdChoice = await ƒS.Menu.getInput(text.choiceTextAsh, "option");
        await ƒS.update();

        switch (thirdChoice) {
            case text.choiceTextAsh.yes:

                await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
                await ƒS.update(); 
                ƒS.Sound.fade(sound.texting, 0.5, 10, true);
                let fourthChoice = await ƒS.Menu.getInput(text.textToAsh, "bigOption");
                switch (fourthChoice) {
                    case text.textToAsh.neutral:
                        await ƒS.Speech.tell(characters.Protagonist, text.textToAsh.neutral);
                        await ƒS.Speech.tell(characters.Ash, text.ashAnswers.neutralAnswer);
                        dataForSave.pointsAsh += 0;
                        break;

                    case text.textToAsh.friendly:
                        await ƒS.Speech.tell(characters.Protagonist, text.textToAsh.friendly);
                        await ƒS.Speech.tell(characters.Ash, text.ashAnswers.friendlyAnswer);
                        dataForSave.pointsAsh += 100;
                        break;

                    case text.textToAsh.accusing:
                        await ƒS.Speech.tell(characters.Protagonist, text.textToAsh.accusing);
                        await ƒS.Speech.tell(characters.Ash, text.ashAnswers.accusingAnswer);
                        dataForSave.pointsAsh -= 100;
                        break;


                }

                ƒS.Character.hide(characters.Ash)

                break;

            case text.choiceTextAsh.no:
                break;
        }
        ƒS.Sound.fade(sound.texting, 0, 2, false);
        console.log(dataForSave.pointsAsh);
        await ƒS.update(); 
    }
}