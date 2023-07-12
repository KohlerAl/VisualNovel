namespace AMurderMystery {
    export async function Endings(): ƒS.SceneReturn {
        let text = {
            ash: {
                //Ending 1
                T00: "Du hast mich also verraten?",
                T01: "ICH HAB DAS FÜR DICH GETAN",
                T02: "Ja. Deine Werke, ultimativ in Szene gesetzt. JEDER spricht jetzt über deine Bücher",
                T03: "Nein, sie haben dich kritisiert. Sie haben deine Arbeit in den Dreck gezogen. Und sie haben bekommen, was sie verdienen. ",
                T04: "Du siehst es nicht, aber es ist der ultimative Liebesbeweis. Ich verspreche dir, das nächste Mal mache ich es besser. ",

                //Ending 2 + 3
                T05: dataForSave.nameProtagonist + " ...",
            },
            protagonist: {
                //Ending 1
                T00: "Ich habe nur gesagt, dass du während beiden Morden auf einmal verschwunden bist.",
                T01: "Du bist also wirklich die Mörderin …",
                T02: "DU HAST UNSCHULDIGE MENSCHEN GETÖTET",
                T03: "Du bist wahnsinnig.",

                //Ending 2
                T04: "Ash, du wirst viele, viele Jahre im Gefängnis verbringen, falls du überhaupt je wieder frei kommst. Und ich glaube, du brauchst psychologische Hilfe. Aber vielleicht, wenn du an dir Arbeitest, können wir irgendwann wieder Kontakt haben. Mach’s gut. ",

                //Ending 3
                T05: "Ash, was du getan hast, ging viel, viel zu weit. Wenn du mich jemals wieder kontaktierst, geh ich zur Polizei. ",


            },
            ermittler: {
                T00: "Wir haben die Vermutung, dass auch Sie etwas mit den Morden zu tun haben. Sie haben in den Befragungen gelogen, um ihre Freundin zu schützen. Bis wir mehr wissen, nehmen wir Sie in Gewahrsam. "
            }
        }

        characters.Protagonist.name = dataForSave.nameProtagonist;
        if (dataForSave.ending1) {
            await ƒS.Location.show(locations.Phone);
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
            await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

            await ƒS.Speech.tell(characters.Ash, text.ash.T00);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);
            await ƒS.Speech.tell(characters.Ash, text.ash.T01);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);
            await ƒS.Speech.tell(characters.Ash, text.ash.T02);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02);
            await ƒS.Speech.tell(characters.Ash, text.ash.T03);
            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03);
            await ƒS.Speech.tell(characters.Ash, text.ash.T04);

            await ƒS.Character.hide(characters.Ash);
            await ƒS.Character.hide(characters.Protagonist);
            await ƒS.Speech.hide();
            await ƒS.update(); 
        }

        else if (dataForSave.ending2) {
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
            await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04);
            await ƒS.Speech.tell(characters.Ash, text.ash.T05);

            await ƒS.Character.hide(characters.Ash);
            await ƒS.Character.hide(characters.Protagonist);
            await ƒS.Speech.hide();
            await ƒS.update(); 
        }
        else if (dataForSave.ending3) {
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
            await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

            await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05);
            await ƒS.Speech.tell(characters.Ash, text.ash.T05);
            await ƒS.Character.hide(characters.Ash);
            await ƒS.Character.hide(characters.Protagonist);
            await ƒS.Speech.hide();
            await ƒS.update(); 

            await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.neutral, AnimationLeveToRight());
        }
        else if (dataForSave.ending4) {
            await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
            await ƒS.Character.show(characters.Officer, characters.Officer.pose.neutral, ƒS.positionPercent(80, 100));
            await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

            await ƒS.Speech.tell(characters.Officer, text.ermittler.T00);
            await ƒS.Character.hide(characters.Officer);
            await ƒS.Character.hide(characters.Protagonist);
            await ƒS.Speech.hide();
            await ƒS.update(); 
        }


    }
}