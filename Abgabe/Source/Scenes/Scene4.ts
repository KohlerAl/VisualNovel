namespace AMurderMystery {
    export async function Scene4(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene1 starting");

        let text = {
            protagonist: {
                T00: "Ja, das bin ich. ",
                T01: "Ich habe mich mit Freundinnen Harriet Smith und Phoebe Miller getroffen und wir haben gemeinsam Filme geschaut, ich bin erst um vier Uhr morgens nach Hause gekommen. Meine Freunde können das bestätigen.",
                T02: "Natürlich.",
                T03: "(Im Stillen) Ash und ich haben gestern noch davon geredet, und heute passiert der Mord aus genau dem Buch, von dem wir gestern geredet haben … Soll ich dem Ermittler davon erzählen?",
                T04: "Gestern Abend, bevor ich zu meinen Freundinnen gegangen bin, haben meine Freundin Ash und ich über meine Bücher geredet. Sie hat mich gefragt, welches der Bücher mein Lieblingsbuch ist. Und am nächsten Morgen sehe ich, dass Mord aus genau dem Buch nachgestellt wurde.",
                T05: "Ich glaube nicht. Ich meine, ich hoffe nicht. Aber der Zufall ist schon sehr merkwürdig. ",

            },
            officer: {
                T00: "Vielen Dank, dass sie sich die Zeit nehmen, unsere Fragen im Mordfall Poppy Newman zu beantworten. Sie sind also die Autorin, richtig?",
                T01: "Bevor wir anfangen, muss ich Sie noch fragen, wo sie letzte Nacht zwischen 22 und 2 Uhr morgens waren. ",
                T02: "Okay, wir werden das überprüfen. Können Sie mir bitte ein paar Fragen zu dem Buch beantworten? ",
                T03: "Wo hat der Mord in ihrem Buch stattgefunden? ",
                T04: "Vielen Dank. Und welche Tatwaffe wurde in ihrem Buch verwendet?",
                T05: "Alles klar, das hilft uns definitiv weiter. Gibt es sonst noch etwas, das Ihnen einfällt? Irgendwelche verrückten Fans? Irgendwelche anderen merkwürdigen Vorkommnisse?",
                T06: "Und Sie glauben, Ihre Freundin könnte etwas mit dem Mord zu tun haben?",
                T07: "Okay. Vielen Dank für die Information, wir werden der Sache nachgehen. Wenn wir weitere Fragen haben, melden wir uns bei Ihnen. "
            },
            crimeSceneVampire: {
                right: "Schlafzimmer",
                T01: "Offene Straße",
                T02: "Café"
            },
            weaponVampire: {
                T00: "Messer",
                right: "Biss",
                T02: "Schlag"
            },
            crimeSceneRitual: {
                T00: "Restaurant",
                right: "Veranstaltungssaal einer religiösen Gruppierung",
                T02: "Rastplatz"
            },
            weaponRitual: {
                T00: "Messer",
                right: "Biss",
                T02: "Schlag"
            },
            tellAboutAsh: {
                T00: "Ja",
                T01: "Nein"
            }
        }
        
        ƒS.Sound.fade(sound.crowdTalking2, 0.15, 5, true);
        ƒS.Sound.fade(sound.computer, 0.1, 5, true);
        ƒS.Sound.fade(sound.pencil, 0.2, 3, true); 
        characters.Protagonist.name = dataForSave.nameProtagonist; 
        await ƒS.Location.show(locations.PoliceStation);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(10, 100));
        await ƒS.Character.show(characters.Officer, characters.Officer.pose.neutral, ƒS.positionPercent(80, 100));
        await ƒS.update(transition.transition2.duration, transition.transition2.alpha, transition.transition2.edge);

        await ƒS.Speech.tell(characters.Officer, text.officer.T00);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
        await ƒS.Speech.tell(characters.Officer, text.officer.T01);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);
        await ƒS.Speech.tell(characters.Officer, text.officer.T02);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
        await ƒS.Speech.tell(characters.Officer, text.officer.T03);

        switch (dataForSave.chosenBook) {
            case "Vampire":
                let dialogueElementVamp = await ƒS.Menu.getInput(text.crimeSceneVampire, "option");
                switch (dialogueElementVamp) {
                    case text.crimeSceneVampire.right:
                        dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        dataForSave.pointsOfficer -= 50;
                        break;
                }

                await ƒS.Speech.tell(characters.Officer, text.officer.T04);

                let scndDialgoueElementVamp = await ƒS.Menu.getInput(text.weaponVampire, "option");
                switch (scndDialgoueElementVamp) {
                    case text.weaponVampire.right:
                        dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        dataForSave.pointsOfficer -= 50;
                        break;
                }

                break;

            case "Ritual":
                let dialogueElementRit = await ƒS.Menu.getInput(text.crimeSceneRitual, "option");
                switch (dialogueElementRit) {
                    case text.crimeSceneRitual.right:
                        dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        dataForSave.pointsOfficer -= 50;
                        break;
                }
                await ƒS.Speech.tell(characters.Officer, text.officer.T04);

                let scndDialogueElementRit = await ƒS.Menu.getInput(text.weaponRitual, "option");
                switch (scndDialogueElementRit) {
                    case text.weaponRitual.right:
                        dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        dataForSave.pointsOfficer -= 50;
                        break;
                }
                break;
        }
        await ƒS.Speech.tell(characters.Officer, text.officer.T05);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);

        let tellAsh = await ƒS.Menu.getInput(text.tellAboutAsh, "option");
        switch (tellAsh) {
            case text.tellAboutAsh.T00:
                dataForSave.pointsOfficer += 50;
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);
                await ƒS.Speech.tell(characters.Officer, text.officer.T06);
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05);
                await ƒS.Speech.tell(characters.Officer, text.officer.T07);
                dataForSave.bonusScene = true; 
                break;

            case text.tellAboutAsh.T01:
                dataForSave.pointsOfficer -= 20;
                break;
        }

        await ƒS.Character.hide(characters.Officer); 
        await ƒS.Character.hide(characters.Protagonist); 
        ƒS.update(); 
        ƒS.Sound.fade(sound.crowdTalking2, 0, 2, true);
        ƒS.Sound.fade(sound.computer, 0, 2, true);
        ƒS.Sound.fade(sound.pencil, 0, 2, true); 
    }
}