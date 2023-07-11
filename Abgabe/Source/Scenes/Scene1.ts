namespace AMurderMystery {
    export async function Scene1(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene1 starting");

        let text = {
            narrator: {
                T00: "Willkommen zu A Murder Mystery! Bevor wir anfangen können, gib bitte hier deinen Namen ein:    "
            },
            protagonist: {
                T00: "Es war wirklich gut. Die Fragen waren mal was anderes und ich habe das Gefühl, dass ich meine Bücher gut bewerben konnte.",
                T01: "Ja, habe ich. Ich mein, ein bisschen Werbung schadet ja nie, oder? Es verkauft sich aber eh schon wirklich gut.",
                T02: "Aber ich ärgere mich immer noch darüber, dass der Verlag sich geweigert hat, mich das Ende ändern zu lassen.",
                T03: "Jap. Ich mein, ich durfte es ja auch andeuten, aber ich wollte es wirklich offensichtlich machen. Richtig in die vollen gehen.",
                T04: "Na ja, es ist jetzt so. Und das Buch kam ja trotzdem ganz gut an.",

                //Option Vampir Mord
                T05: "Naja, weil ich in dem anderen Buch nicht schreiben durfte, was ich wollte, würde ich sagen den Vampir-Mord.",
                T06: "Genau.",


                //Option Ritual Mord
                T07: "Obwohl ich nicht ganz schreiben durfte, was ich wollte, würde ich sagen, der Ritual-Mord.",
                T08: "Genau."
            },
            ash: {
                T00: "Wie war dein Interview heute?",
                T01: "Das freut mich. Hast du auch über dein neues Buch gesprochen?",
                T02: "Klar, Werbung ist immer gut.",
                T03: "Dass der Mord ein Ritual war?",
                T04: "Richtig dumm, dass du das nicht machen durftest.",
                T05: "Welches deiner Bücher magst du lieber?",

                //Option Vampir Mord
                T06: "Wo der Mörder das Opfer gebissen und auf ein Bett aus Rosen gelegt hat?",
                T07: "Ich muss sagen, ich mag dieses Buch auch wirklich gerne.",

                //Option Ritual Mord
                T08: "Wo das Opfer in einem religiösen Ritual ermordet wurde?",
                T09: "Du hast recht, das ist ein wirklich interessantes Buch."
            },
            option: {
                Vampire: "Vampir-Mord",
                Ritual: "Ritual-Mord"
            }
        }

        ƒS.Sound.fade(sound.clock, 10, 800, true);
        await ƒS.Location.show(locations.LivingRoom);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(10, 100));
        await ƒS.Character.show(characters.Ash, characters.Ash.pose.happy, ƒS.positionPercent(80, 100));
        await ƒS.update(transition.transition2.duration, transition.transition2.alpha, transition.transition3.edge);

        ƒS.Speech.show();

        await ƒS.Speech.tell("Narrator", text.narrator.T00, false); 
        //ƒS.Speech.tell("", ""); 
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.Protagonist.name = dataForSave.nameProtagonist;


        await ƒS.Speech.tell(characters.Ash, text.ash.T00);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
        await ƒS.Speech.tell(characters.Ash, text.ash.T01);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);
        await ƒS.Speech.tell(characters.Ash, text.ash.T02);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
        await ƒS.Speech.tell(characters.Ash, text.ash.T03);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);
        await ƒS.Speech.tell(characters.Ash, text.ash.T04);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);
        await ƒS.Speech.tell(characters.Ash, text.ash.T05);

        let dialogueElement = await ƒS.Menu.getInput(text.option, "option");

        switch (dialogueElement) {
            case text.option.Vampire:
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05);
                await ƒS.Speech.tell(characters.Ash, text.ash.T06);
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T06);
                await ƒS.Speech.tell(characters.Ash, text.ash.T07);
                dataForSave.chosenBook = "Vampire";
                console.log(dataForSave.chosenBook);

                break;
            case text.option.Ritual:
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T07);
                await ƒS.Speech.tell(characters.Ash, text.ash.T08);
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T08);
                await ƒS.Speech.tell(characters.Ash, text.ash.T09);
                dataForSave.chosenBook = "Ritual";
                console.log(dataForSave.chosenBook);
                break;
        }

        ƒS.Sound.fade(sound.clock, 800, 0, true);
        ƒS.Character.hide(characters.Ash);

    }
}