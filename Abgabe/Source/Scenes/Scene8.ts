namespace AMurderMystery {
    export async function Scene8(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Ich fühle mich immer noch schuldig, dass meinetwegen unschuldige Menschen ermordet wurden … Aber zum Glück habe ich nur zwei Bücher veröffentlicht, so hoffentlich hat der Spuk jetzt ein Ende. ",
                T01: "… Außer … ",
                T02: "Was, wenn der Mörder wieder anfängt zu morden, wenn mein neues Buch veröffentlicht wird?",

                //Nachrichten mit Ash
                T03: "Ash? ",
                T04: "Was hast du vor?",
                T05: "Ash bitte Antworte",
                T06: "ASH BITTE",
            },
            ash: {
                T00: "Ich werde dir zeigen, wie viel du mir bedeutest. Mach dir keine Sorgen. "
            }
        }
        if (!dataForSave.ending1) {
            characters.Protagonist.name = dataForSave.nameProtagonist; 
            await ƒS.Location.show(locations.Office);
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100))
            await ƒS.update(transition.transition2.duration, transition.transition2.alpha, transition.transition2.edge);

            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);

            ƒS.Sound.fade(sound.texting, 400, 400, true);
            await ƒS.Location.show(locations.Phone); 
            await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100))
            await ƒS.update(); 
            await ƒS.Speech.tell(characters.Ash, text.ash.T00);
            await ƒS.Character.hide(characters.Ash); 
            await ƒS.update(); 

            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T06);

            ƒS.Sound.fade(sound.texting, 400, 0, true);
        }


    }


}