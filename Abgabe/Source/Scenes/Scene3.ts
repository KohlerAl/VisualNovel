namespace AMurderMystery {
    export async function Scene3(): ƒS.SceneReturn {

        let text = {
            protagonist: {
                T00: "Die Polizei hat mich grade angerufen und möchte mich befragen, damit ich ihnen bei den Ermittlungen helfen kann, schließlich hat der Mord mit meinem Buch zu tun. Ich sollte besser die Notizen zusammensuchen, damit ich später alle Details weiß.",
                T01: "Ah … hier hab ich sie hingetan. Okay, ich packe die Zettel am besten in meine Tasche.",
                T02: "Das sollten alle sein. Dann auf zur Polizeistation."
            }
        }
        
        characters.Protagonist.name = dataForSave.nameProtagonist;  
        await ƒS.Location.show(locations.Office); 
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(10, 100)); 
        await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00); 
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01); 

        ƒS.Inventory.add(items.pageRitual); 
        ƒS.Inventory.add(items.pageVampire); 

        await ƒS.Inventory.open(); 
        await ƒS.update(); 

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T02); 

        
    }
}