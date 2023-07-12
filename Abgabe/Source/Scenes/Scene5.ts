namespace AMurderMystery {
    export async function Scene5(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Ich hoffe, das Schreiben lenkt mich ein bisschen ab. Ich denke, als Nächstes sollte ich mir überlegen, wer die Leiche findet.",
                T01: "Okay, sehr schön. Und jetzt das Mordmotiv.",
                T02: "Das schreibt sich ja wie von selbst, ich glaube so langsam habe ich einen guten Plan für mein Buch. Moment, wo hab ich denn mein Handy? Ich glaube, das habe ich vorhin im Wohnzimmer liegenlassen."
            },
            choiceWitness: {
                neighbor: "Ein besorgter Anwohner",
                friend: "Die beste Freundin des Opfers, die das Handy geortet hat"
            },
            motive: {
                jealousy: "Eifersucht",
                money: "Geld"
            }
        }

        characters.Protagonist.name = dataForSave.nameProtagonist;
        await ƒS.Location.show(locations.Office);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
        await ƒS.update(transition.transition4.duration, transition.transition4.alpha, transition.transition4.edge);

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);

        ƒS.Sound.fade(sound.laptop, 0.2, 5, true);
        let witness = await ƒS.Menu.getInput(text.choiceWitness, "option");
        switch (witness) {
            case text.choiceWitness.friend:
                dataForSave.bookWitness = "der besten Freundin des Opfers";
                break;

            case text.choiceWitness.neighbor:
                dataForSave.bookWitness = "einem Nachbarn des Opfers"
                break;
        }

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);

        dataForSave.bookMotive = await ƒS.Menu.getInput(text.motive, "option");

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
        await ƒS.Character.hide(characters.Protagonist);
        ƒS.Sound.fade(sound.laptop, 0, 2, true);
        await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.neutral, AnimationProtagonistLeave());
        await ƒS.Speech.tell("", ""); 
        await ƒS.Character.animate(characters.Ash, characters.Ash.pose.neutral, AnimationRightToComputer());
        await ƒS.Character.animate(characters.Ash, characters.Ash.pose.neutral, AnimationStandStill());
        await ƒS.Character.animate(characters.Ash, characters.Ash.pose.neutral, AnimationComputerToRight());




    }

}