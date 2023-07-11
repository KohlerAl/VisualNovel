namespace AMurderMystery {
    export async function Scene2(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene1 starting");

        let text = {
            protagonist: {
                T00: "Hmmm… Also als Erstes brauche ich eine Mordwaffe, damit ich weiß, was am Tatort sein muss.",
                T01: "Okay, als Nächstes sollte ich festlegen, wo der Mord stattfindet",
                T02: "Das … das ist doch der Mord aus meinem Buch? Jemand stellt einen Mord aus meinem Buch dar? Vielleicht sollte ich Ash schreiben?"
            },
            murderWeaponChoice: {
                knive: "Messer",
                rope: "Seil"
            },
            crimeSceneChoice: {
                bigBen: "Big Ben",
                tower: "Tower of London"
            }
            
        }

        await ƒS.Location.show(locations.Office);
        characters.Protagonist.name = dataForSave.nameProtagonist; 
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(10, 100));
        await ƒS.update(transition.transition6.duration, transition.transition6.alpha, transition.transition6.edge);

        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T00);

        ƒS.Sound.fade(sound.laptop, 10, 20, true);
        let firstChoice = await ƒS.Menu.getInput(text.murderWeaponChoice, "option");
        switch (firstChoice) {
            case text.murderWeaponChoice.knive:
                dataForSave.bookWeapon = text.murderWeaponChoice.knive;
                break;

            case text.murderWeaponChoice.rope:
                dataForSave.bookWeapon = text.murderWeaponChoice.rope;
                break;
        }
        
        await ƒS.Speech.tell(characters.Protagonist, text.protagonist.T01);

        let secondChoice = await ƒS.Menu.getInput(text.crimeSceneChoice, "option");
        switch (secondChoice) {
            case text.crimeSceneChoice.bigBen:
                dataForSave.bookCrimeScene = text.crimeSceneChoice.bigBen;
                break;
            case text.crimeSceneChoice.tower:
                dataForSave.bookCrimeScene = text.crimeSceneChoice.tower;
                break;
        }
        ƒS.Sound.fade(sound.laptop, 20, 0, true);
    }
}



/* export async function Scene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");

    let text = {
        protagonist: {

        },
        ash: {

        }
    }
} */