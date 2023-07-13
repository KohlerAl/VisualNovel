namespace AMurderMystery {
    export async function Scene6(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                //Beziehungspunkte zu Ash -200
                T00: "Ash, können wir nochmal über vorhin reden?",
                T01: "Ich wollte nur sagen, dass es mir leidtut.",
                T02: "Ash, warte, bitte.",

                //Beziehungspunkte zu Ash -100 oder 0
                T03: "Ash?",
                T04: "Können wir über den Mord reden? Irgendwie macht mir das Ganze Angst.",
                T05: "Naja, jemand stellt meine Bücher nach und unschuldige Menschen werden deswegen ermordet. Ich fühl mich schuldig. ",
                T06: "Ja, das stimmt. Aber ich hab ja quasi die Vorlage geliefert.",
                T07: "Unschuldige Menschen sterben, Ash. ",
                T08: "Jup, ich hoffe wirklich, das hilft. ",
                T09: "Oh okay. Sag mir wies war, dann können wir da ja vielleicht mal zusammen hin?",

                //Beziehungspunkte zu Ash +100
                T10: "Ash?",
                T11: "Können wir über den Mord reden? Irgendwie macht mir das Ganze Angst.",
                T12: "Unschuldige Menschen werden ermordet, wegen meiner Bücher. Was ist, wenn ich als Nächstes dran bin?",
                T13: "Wirklich?",
                T14: "Ich hoffs. ",
                T15: "Das klingt toll. ",
                T16: "Ohhh okay. Klingt nach nem Plan. "
            },
            ash: {
                //Beziehungspunkte zu Ash -200
                T00: "Kannst du das Thema bitte einfach sein lassen? Ich hab echt keine Lust drauf, da jetzt drüber zu reden",
                T01: "Ich glaube, es wäre besser, wenn ich jetzt gehe. ",

                //Beziehungspunkte zu Ash -100 oder 0
                T02: "Hm?",
                T03: "Warum das?",
                T04: "Aber du hast ja die Morde nicht begangen. Oder irgendwas mit den Morden zu tun. ",
                T05: "Aber findest du das nicht auch ein bisschen … ich weiß nicht, cool? Dass jemand deine Bücher so sehr mag, dass er oder sie die Handlung nachstellt?",
                T06: "Mach dir keine Sorgen, alles wird gut. Wolltest du heute nicht zu deinen Freundinnen? Das lenkt dich bestimmt ein bisschen ab. ",
                T07: "Bestimmt. Ich bin wahrscheinlich auch nicht da, ich wollte mit ner Freundin dieses neue Restaurant ausprobieren. ",
                T08: "Mach ich, versprochen",

                //Beziehungspunkte zu Ash +100
                T09: "Hm?",
                T10: "Oh nein," + dataForSave.nameProtagonist + ". Warum hast du Angst?",
                T11: "Das wird nicht passieren, ich pass auf dich auf. Versprochen.",
                T12: "Wirklich wirklich. Mach dir keine Sorgen. Und ich bin mir sicher, die Polizei findet den Täter bald. ",
                T13: "Alles wird gut. Und du gehst ja heute zu deinen Freundinnen, oder? Das lenkt dich bestimmt ein bisschen ab. Ich kann dich auch hinbringen, wenn du möchtest, und später wieder abholen. ",
                T14: "Natürlich, alles für dich. Und in der Zwischenzeit geh ich irgendwo in ne Bar oder so."
            }
        }
        
        characters.Protagonist.name = dataForSave.nameProtagonist; 
        ƒS.Sound.fade(sound.clock, 0.2, 10, true);
        await ƒS.Location.show(locations.LivingRoom);
        console.log(dataForSave.pointsAsh);
        switch (dataForSave.pointsAsh) {
            case -200:
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
                await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
                await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T00); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T01); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02); 

                await ƒS.Character.hide(characters.Ash); 
                await ƒS.Character.animate(characters.Ash, characters.Ash.pose.neutral, AnimationLeveToRight()); 
                break;

            case -100:
            case 0:
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100));
                await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100));
                await ƒS.update();

                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T02); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T04); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T03); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T05); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T04); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T06); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T05); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T07); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T06);  
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T08); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T07); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T09); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T08); 

                break;

            case 100:
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(10, 100));
                await ƒS.Character.show(characters.Ash, characters.Ash.pose.happy, ƒS.positionPercent(80, 100));
                await ƒS.update();

                 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T10); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T09); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T11); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T10); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T12); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T11); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T13); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T12); 

                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T14); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T13); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T15); 
                await ƒS.Speech.tell(characters.Ash, text.ash.T14); 
                await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T16); 
                break;
        }

        
        ƒS.Sound.fade(sound.clock, 0, 2, true);
        await ƒS.Character.hide(characters.Ash);
        ƒS.update(); 
    }
}