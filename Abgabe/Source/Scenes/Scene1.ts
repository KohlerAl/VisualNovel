namespace AMurderMystery {
    export async function Scene1(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene1 starting");

        let text = {
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

        ƒS.Sound.fade(sound.wind, 0.05, 0.12, true); 
        await ƒS.Location.show(locations.LivingRoom); 
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(15, 100)); 
        await ƒS.update(1); 

        await ƒS.Speech.tell(characters.Ash, text.ash.T00); 
    }
}