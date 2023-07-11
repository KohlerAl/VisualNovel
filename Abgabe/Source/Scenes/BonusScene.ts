namespace AMurderMystery {
    export async function SceneBonus(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Was?",
                T01: "Und, hast du?",
                T02: "Ich wollte ehrlich sein, es geht hier schließlich um einen ziemlich grausamen Mord.",
                T03: "Ash, warte …"
            },
            ash: {
                T00: "Ich habe gerade einen Anruf von der Polizei bekommen. Hast du vielleicht vergessen, mir etwas zu erzählen?",
                T01: "Komm, spiel nicht die Dumme. Du weißt genau, wovon ich rede. Du hast der Polizei von unserem Gespräch erzählt. Und jetzt denken die, ich hab was mit dem Mord zu tun.",
                T02: "Allein schon, dass du mir das unterstellst …",
                T03: "Ich denke, ich geh jetzt besser. "
            }
        }
        
        characters.Protagonist.name = dataForSave.nameProtagonist; 
        await ƒS.Location.show(locations.Office); 
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.neutral, ƒS.positionPercent(10, 100)); 
        await ƒS.Character.show(characters.Ash, characters.Ash.pose.neutral, ƒS.positionPercent(80, 100)); 
        await ƒS.update();

        await ƒS.Speech.tell(characters.Ash, text.ash.T00); 
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00); 
        await ƒS.Speech.tell(characters.Ash, text.ash.T01); 
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01); 
        await ƒS.Speech.tell(characters.Ash, text.ash.T02); 
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02); 
        await ƒS.Speech.tell(characters.Ash, text.ash.T03); 

        await ƒS.Character.hide(characters.Ash); 
        await ƒS.Character.animate(characters.Ash, characters.Ash.pose.neutral, AnimationLeveToRight()); 

        
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T03); 

        dataForSave.pointsAsh -= 100; 
    }
}