namespace AMurderMystery {
    export async function Scene9(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Ich glaube, ich muss langsam einsehen, dass Ash die Mörderin sein könnte. Aber ich hab Angst, einfach zur Polizei zu gehen. Ich will mir erst 1000 % sicher sein. ",
                T01: "Wenn meine Vermutung stimmt, dann müsste Ash ja noch in der Nähe vom Tatort sein, oder? Oder ich könnte sie direkt konfrontieren. Sollte ich sie konfrontieren?",

                //Confront Ash
                T02: "Ash? Steckst du hinter all den Morden?",
                T03: "Warum hast du das getan? ",
                T04: "Aber ich wollte das nie. Ich wollte nicht, dass unschuldige Menschen sterben. ",
                T06: "Ich sollte die Polizei alarmieren",
                //Go to crime scene
                T07: "Ash? Was machst du hier?",
                T08: "ABER WARUM WÜRDEST DU SO ETWAS TUN?",
                T09: "Aber ich wollte nie, dass du das tust. Es sind unschuldige Menschen gestorben, Ash. ",
                T10: "Du bist wahnsinnig. ",
                T11: "Ash, ich muss die Polizei anrufen. Du bist eine Serienmörderin.",

                //Phone Call
                T12: "Hallo?",
                T13: "Ash?"
            },
            ash: {
                //Confront Ash
                T00: "Das fällt dir aber früh auf. ",
                T01: "Ist das nicht der ultimative Liebesbeweis? Ich habe für dich gemordet, " + dataForSave.nameProtagonist,
                T002: "Ich hoffe, du wirst es eines Tages verstehen",
                //Go to crime scene
                T02: "Ich glaube, wir wissen beide, warum ich hier bin. ",
                T03: "Der ultimative Liebesbeweis. Ich habe deine Bücher zum Leben erweckt und dich gegen deine Kritiker verteidigt.",
                T04: "Unschuldig? Sie haben dich kritisiert, deine Arbeit in den Dreck gezogen. Ich hab dir einen Gefallen getan.",
                T05: "Du liebst mich. ",

                //Phone Call
                T06: "Hallo, " + dataForSave.nameProtagonist,
                T07: "Es tut mir leid. Ich hätte dir meine Liebe besser zeigen sollen. Ich verspreche dir, ich werde es in Zukunft besser machen.",
            },
            news: {
                T00: "Die Mord-Serie geht weiter. Auch ein dritter Mord wurde ausgehend von Notizen von " + dataForSave.nameProtagonist + " Baker nachgestellt. Das Opfer wurde von " + dataForSave.bookWitness + " gefunden und mit " + dataForSave.bookWeapon + " ermordet. Die Ermittlungen dauern an. Die Bevölkerung ist angehalten, Hinweise der Polizei mitzuteilen. "
            },
            confrontAsh: {
                yes: "Ja",
                no: "Nein"
            },
            stay: {
                yes: "Ja",
                no: "Nein"
            }
        }

        if (!dataForSave.ending1) {
            characters.Protagonist.name = dataForSave.nameProtagonist; 
            await ƒS.Location.show(locations.Office);
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100))
            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

            ƒS.Sound.fade(sound.smartphoneRing, 20, 10, false);
            await ƒS.Speech.tell("Phone", text.news.T00);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);

            let confrontAsh = await ƒS.Menu.getInput(text.confrontAsh, "option");
            switch (confrontAsh) {
                case text.confrontAsh.yes:
                    ƒS.Sound.fade(sound.clock, 0.5, 5, true);
                    await ƒS.Location.show(locations.LivingRoom);
                    await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100))
                    await ƒS.update();

                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T00);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T01);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T002);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T06);

                    ƒS.Sound.fade(sound.clock, 0, 2, true);
                    break;  

                case text.confrontAsh.no:
                    ƒS.Sound.fade(sound.streetAmbiance, 0.05, 5, true);
                    switch (dataForSave.bookCrimeScene) {
                        case "Big Ben":
                            await ƒS.Location.show(locations.BigBen);
                            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);
                            break;

                        case "Tower of London":
                            await ƒS.Location.show(locations.TowerOfLondon);
                            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);
                            break;
                    }

                    await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100))
                    await ƒS.update();

                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T07);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T02);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T08);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T03);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T09);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T04);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T10);
                    await ƒS.Speech.tell(characters.Ash, text.ash.T05);
                    await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T11);
                    ƒS.Sound.fade(sound.streetAmbiance, 0, 2, true);
                    break;
            }

            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T12);
            await ƒS.Speech.tell(characters.Ash, text.ash.T06);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T13);
            await ƒS.Speech.tell(characters.Ash, text.ash.T07);

            let stayWithAsh = await ƒS.Menu.getInput(text.stay, "option");
            if (dataForSave.pointsOfficer > 0) {
                switch (stayWithAsh) {
                    case text.stay.yes:
                        dataForSave.ending2 = true;
                        break;

                    case text.stay.no:
                        dataForSave.ending3 = true;
                        break;
                }
            }
            else {
                dataForSave.ending4 = true;
            }
        }
    }
}