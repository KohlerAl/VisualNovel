namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("first Scene"); 

        let text = {
            Lily: {
                T0001: "Hallo", 
                T0002: "Welt", 
                T0003: "AHHHHHHHHH" 
            }
        };

        //Hide the text box
        ƒS.Speech.hide();

        await ƒS.Location.show(locations.background);
        //Nach jeder Location und jedem Character updaten!
        await ƒS.update(); 

        //make lily say text 1
        await ƒS.Speech.tell(characters.Lily, text.Lily.T0001);
        
        //show Lily with a specifc pose and position
        await ƒS.Character.show(characters.Lily, characters.Lily.pose.angry, ƒS.positionPercent(100, 70)); 
    }
}


/* namespace Template {
    export async function thirdScene(): ƒS.SceneReturn {
    
    console.log("Third Scene starting");
    
    let text = {
    Lily: {
    T0001: "Hallo",
    T0002: "Anderer Text",
    T0003: "Text Nummer 3",
    }
    }
    
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.theathre);
    await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.Lily, text.Lily.T0001);
    
    
    }
    } */


  /*   export function getAnimation(): ƒS.AnimationDefinition {
        return {
        start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
        end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        } */