namespace AMurderMystery {
    export async function Scene7(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Nein, tut mir leid. Ich bin genauso ahnungslos wie Sie. ",
                T01: "Natürlich, aber jeder kann ja die Bücher gelesen haben.",
                T02: "Ich war gestern bei meinen Freundinnen, die mich ablenken wollten nach dem ersten Mord.",
                T03: "Das ist richtig. ",
                T04: "(Im Stillen) Ash war schon wieder unterwegs, und es ist wieder ein Mord passiert. So langsam glaube ich nicht, dass das ein Zufall war. Aber ich will sie nicht einfach so verdächtigen. ",

                //Spieler wählt Nein
                T05: "Wie gesagt, mir fällt niemand ein. Sollte sich das ändern, melde ich mich bei Ihnen.",

                //Spieler wählt Ja
                T06: "Meine Freundin Ash war während beider Morde nicht zu Hause. Und ich weiß, sie mochte diesen Kritiker überhaupt nicht, eben weil er meine Bücher so sehr kritisiert hat.",
            },
            officer: {
                T00: "Gestern Abend wurde auch der Mord aus ihrem zweiten Buch nachgestellt. Die einzige Verbindung zwischen den Morden sind Ihre Bücher. Ist ihnen inzwischen etwas eingefallen? Haben Sie eine Idee, haben sie merkwürdige Nachrichten erhalten?  Irgendwas?",
                T01: "Der Mord wurde erneut exakt aus dem Buch kopiert, bis ins letzte Detail. Es muss also jemand sein, der die Bücher ganz genau kennt. Und als Autorin kennen Sie ihre Werke ja, oder nicht?",
                T02: "Bei dem Opfer handelt es sich um den Buchkritiker Robin Harvey, der Ihre Werke heftigst kritisiert hat. Sie hätten also auch ein Motiv.",
                T03: "Sie haben also wieder ein Alibi.",
                T04: "Und sonst haben Sie keine Idee, wer ein Motiv haben könnte?",

                //Spieler wählt Nein
                T05: "Okay. Danke.",

                //Spieler wählt Ja
                T06: "Vielen Dank für den Hinweis, wir gehen der Sache nach.",

            },
            tellAboutAsh: {
                yes: "Ja",
                no: "Nein"
            }
        }
        
        characters.Protagonist.name = dataForSave.nameProtagonist; 
        await ƒS.Location.show(locations.PoliceStation);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
        await ƒS.Character.show(characters.Officer, characters.Officer.pose.neutral, ƒS.positionPercent(80, 100));
        await ƒS.update(transition.transition2.duration, transition.transition2.alpha, transition.transition2.edge);


        await ƒS.Speech.tell(characters.Officer, text.officer.T00);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
        await ƒS.Speech.tell(characters.Officer, text.officer.T01);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);
        await ƒS.Speech.tell(characters.Officer, text.officer.T02);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
        await ƒS.Speech.tell(characters.Officer, text.officer.T03);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);
        await ƒS.Speech.tell(characters.Officer, text.officer.T04);
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);

        let tellAsh = await ƒS.Menu.getInput(text.tellAboutAsh, "option");

        switch (tellAsh) {
            case text.tellAboutAsh.no:
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05);
                await ƒS.Speech.tell(characters.Officer, text.officer.T05);
                break;

            case text.tellAboutAsh.yes:
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T06);
                await ƒS.Speech.tell(characters.Officer, text.officer.T06);
                dataForSave.pointsOfficer += 50; 
                dataForSave.pointsAsh -= 100; 
                dataForSave.ending1 = true; 
                break;
        }

        await ƒS.Character.hide(characters.Officer); 
    }
}