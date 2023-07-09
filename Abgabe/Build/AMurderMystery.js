"use strict";
var AMurderMystery;
(function (AMurderMystery) {
    function AnimationLeftToRight() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(15, 100) },
            end: { translation: AMurderMystery.ƒS.positions.bottomright },
            duration: 2,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationLeftToRight = AnimationLeftToRight;
    function AnimationLeftBorderToLeft() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(75, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(100, 100) },
            duration: 1,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationLeftBorderToLeft = AnimationLeftBorderToLeft;
    function AnimationCenterToCenter() {
        return {
            start: { translation: AMurderMystery.ƒS.positions.center, scaling: new AMurderMystery.ƒS.Position(0.5, 0.5) },
            end: { translation: AMurderMystery.ƒS.positions.center, scaling: new AMurderMystery.ƒS.Position(0.5, 0.5) },
            duration: 2,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationCenterToCenter = AnimationCenterToCenter;
    function AnimationCenterToLeft() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(40, 80) },
            end: { translation: AMurderMystery.ƒS.positionPercent(10, 80) },
            duration: 2,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationCenterToLeft = AnimationCenterToLeft;
    function AnimationLeftToCenter() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(10, 80) },
            end: { translation: AMurderMystery.ƒS.positionPercent(40, 80) },
            duration: 2,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationLeftToCenter = AnimationLeftToCenter;
    function AnimationLeveToRight() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(80, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(200, 100) },
            duration: 3,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationLeveToRight = AnimationLeveToRight;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    AMurderMystery.ƒ = FudgeCore;
    AMurderMystery.ƒS = FudgeStory;
    AMurderMystery.dataForSave = {
        nameProtagonist: "",
        pointsAsh: 0,
        pointsOfficer: 0,
        chosenBook: "",
        bookWeapon: "",
        bookCrimeScene: "",
        bookWitness: "",
        bookMotive: "",
        ending: "",
        bonusScene: false
    };
    console.log("FudgeStory template starting");
    AMurderMystery.transition = {
        transition1: {
            duration: 1,
            alpha: "Images/Transitions/t1.png",
            edge: 1 //hardness of transition
        },
        transition2: {
            duration: 1,
            alpha: "Images/Transitions/t2.png",
            edge: 1
        },
        transition3: {
            duration: 1,
            alpha: "Images/Transitions/t3.png",
            edge: 1
        },
        transition4: {
            duration: 1,
            alpha: "Images/Transitions/t4.png",
            edge: 1
        },
        transition5: {
            duration: 1,
            alpha: "Images/Transitions/t5.png",
            edge: 1
        },
        transition6: {
            duration: 1,
            alpha: "Images/Transitions/t6.png",
            edge: 1
        },
    };
    AMurderMystery.sound = {
        crowdTalking1: "Sounds/crowd-talking-1.mp3",
        crowdTalking2: "Sounds/crowd-talking-2.mp3",
        computer: "Sounds/keyboard_computer.mp3",
        laptop: "Sounds/keyboard_laptop.mp3",
        pencil: "Sounds/pencil.mp3",
        smartphoneRing: "Sounds/smartphone_ring.wav",
        streetAmbiance: "Sounds/street_ambiance.mp3",
        telephoneRing: "Sounds/telephone-ring-04.mp3",
        texting: "Sounds/texting.wav",
        traffic: "Sounds/traffic.mp3",
        wind: "Sounds/wind.mp3",
        clock: "Sounds/clock.mp3"
    };
    AMurderMystery.locations = {
        Office: {
            name: "Office",
            background: "Images/Backgrounds/Office.png"
        },
        LivingRoom: {
            name: "LivingRoom",
            background: "Images/Backgrounds/LivingRoom.png"
        },
        BigBen: {
            name: "BigBen",
            background: "Images/Backgrounds/BigBen.png"
        },
        PoliceStation: {
            name: "PoliceStation",
            background: "Images/Backgrounds/PoliceStation.png"
        },
        TowerOfLondon: {
            name: "TowerOfLondon",
            background: "Images/Backgrounds/TowerOfLondon.png"
        },
        Phone: {
            name: "Phone",
            background: "Images/Backgrounds/Phone.png"
        }
    };
    AMurderMystery.characters = {
        Protagonist: {
            name: AMurderMystery.dataForSave.nameProtagonist,
            origin: AMurderMystery.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                happy: "Images/Characters/protagonist_happy.png",
                neutral: "Images/Characters/protagonist_neutral.png"
            }
        },
        Ash: {
            name: "Ash",
            origin: AMurderMystery.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                happy: "Images/Characters/ash_smile.png",
                neutral: "Images/Characters/ash_neutral.png"
            }
        },
        Officer: {
            name: "Officer",
            origin: AMurderMystery.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                neutral: "Images/Characters/polizist.png"
            }
        }
    };
    AMurderMystery.items = {
        pageVampire: {
            name: "Vampire Novel Notes",
            description: "Notes about the Vampire Novel to answer the officers questions",
            image: "Images/Items/VampirePage.png",
            static: true
        },
        pageRitual: {
            name: "Ritual Novel Notes",
            description: "Notes about the Ritual Novel to answer the officers questions",
            image: "Images/Items/RitualPage.png",
            static: true
        }
    };
    //Credits anzeigen
    function showCredits() {
        AMurderMystery.ƒS.Text.addClass("credits");
        AMurderMystery.ƒS.Text.print("Dieser Visual Novel wurde mit FudgeStory im Sommersemester 2023 erstellt." +
            "<br/>" +
            "Von Alida Kohler, MKB7, 263819" +
            "<br/>" +
            "Die Hintergründe, Charaktere und Items wurden selbst in Aseprite gezeichnet." +
            "<br/>" +
            "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurde." +
            "<br/>" +
            "Die Soundelemente wurden von https://www.soundjay.com/ und https://freesound.org/ heruntergeladen" +
            "<br/>");
    }
    AMurderMystery.showCredits = showCredits;
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        //Menu
        AMurderMystery.gameMenu = AMurderMystery.ƒS.Menu.create(AMurderMystery.inGameMenu, AMurderMystery.buttonFunctionalities, "gameMenu");
        AMurderMystery.gameMenu.close();
        AMurderMystery.ƒS.Speech.hide();
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            /* { id:"scene1",scene: Scene1, name: "Scene1" },
            { id:"scene2",scene: Scene2, name: "Scene2" },
            { id:"scene2_2",scene: Scene2_2, name: "Scene2_2" }, */
            /* { id:"scene3",scene: Scene3, name: "Scene3" },
            { id:"scene4",scene: Scene4, name: "Scene4" }, */
            { id: "sceneBonus", scene: AMurderMystery.SceneBonus, name: "SceneBonus" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        AMurderMystery.dataForSave = AMurderMystery.ƒS.Progress.setData(AMurderMystery.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(data);
        AMurderMystery.ƒS.Progress.go(scenes);
    }
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    AMurderMystery.inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-",
        inventar: "Inventar",
    };
    let menu = false;
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        AMurderMystery.ƒS.Sound.setMasterVolume(volume);
    }
    AMurderMystery.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        AMurderMystery.ƒS.Sound.setMasterVolume(volume);
    }
    AMurderMystery.decrementSound = decrementSound;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            //Speichern
            case AMurderMystery.inGameMenu.save:
                await AMurderMystery.ƒS.Progress.save();
                break;
            //Laden
            case AMurderMystery.inGameMenu.load:
                await AMurderMystery.ƒS.Progress.load();
                break;
            //Sound lauter
            case AMurderMystery.inGameMenu.volumeup:
                incrementSound();
                break;
            //Sound leiser
            case AMurderMystery.inGameMenu.volumedown:
                decrementSound();
                break;
            //Credits
            case AMurderMystery.inGameMenu.credits:
                AMurderMystery.showCredits();
                break;
            case AMurderMystery.inGameMenu.inventar:
                await AMurderMystery.ƒS.Inventory.open();
                break;
        }
    }
    AMurderMystery.buttonFunctionalities = buttonFunctionalities;
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case AMurderMystery.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await AMurderMystery.ƒS.Progress.save();
                break;
            case AMurderMystery.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await AMurderMystery.ƒS.Progress.load();
                break;
            case AMurderMystery.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    AMurderMystery.gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    AMurderMystery.gameMenu.open();
                    menu = true;
                }
                break;
        }
    }
    AMurderMystery.hndKeyPress = hndKeyPress;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function SceneBonus() {
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
        };
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update();
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T03);
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
        await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.AnimationLeveToRight());
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
        AMurderMystery.dataForSave.pointsAsh -= 100;
    }
    AMurderMystery.SceneBonus = SceneBonus;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Intro() {
        console.log("intro time");
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
        await AMurderMystery.ƒS.update(1);
    }
    AMurderMystery.Intro = Intro;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene1() {
        console.log("FudgeStory Template Scene1 starting");
        let text = {
            narrator: {
                T00: "Willkommen zu A Murder Mystery! Bevor wir anfangen können, gib bitte hier deinen Namen ein:    "
            },
            protagonist: {
                T00: "Es war wirklich gut. Die Fragen waren mal was anderes und ich habe das Gefühl, dass ich meine Bücher gut bewerben konnte.",
                T01: "Ja, habe ich. Ich mein, ein bisschen Werbung schadet ja nie, oder? Es verkauft sich aber eh schon wirklich gut.",
                T02: "Aber ich ärgere mich immer noch darüber, dass der Verlag sich geweigert hat, mich das Ende ändern zu lassen.",
                T03: "Jap. Ich mein, ich durfte es ja auch andeuten, aber ich wollte es wirklich offensichtlich machen. Richtig in die vollen gehen.",
                T04: "Na ja, es ist jetzt so. Und das Buch kam ja trotzdem ganz gut an.",
                //Option Vampir Mord
                T05: "Naja, weil ich in dem anderen Buch nicht schreiben durfte, was ich wollte, würde ich sagen den Vampir-Mord.",
                T06: "Genau.",
                //Option Ritual Mord
                T07: "Obwohl ich nicht ganz schreiben durfte, was ich wollte, würde ich sagen, der Ritual-Mord.",
                T08: "Genau."
            },
            ash: {
                T00: "Wie war dein Interview heute?",
                T01: "Das freut mich. Hast du auch über dein neues Buch gesprochen?",
                T02: "Klar, Werbung ist immer gut.",
                T03: "Dass der Mord ein Ritual war?",
                T04: "Richtig dumm, dass du das nicht machen durftest.",
                T05: "Welches deiner Bücher magst du lieber?",
                //Option Vampir Mord
                T06: "Wo der Mörder das Opfer gebissen und auf ein Bett aus Rosen gelegt hat?",
                T07: "Ich muss sagen, ich mag dieses Buch auch wirklich gerne.",
                //Option Ritual Mord
                T08: "Wo das Opfer in einem religiösen Ritual ermordet wurde?",
                T09: "Du hast recht, das ist ein wirklich interessantes Buch."
            },
            option: {
                Vampire: "Vampir-Mord",
                Ritual: "Ritual-Mord"
            }
        };
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 10, 800, true);
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.happy, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update(1);
        AMurderMystery.ƒS.Speech.show();
        await AMurderMystery.ƒS.Speech.tell("Narrator", text.narrator.T00, false);
        //ƒS.Speech.tell("", ""); 
        AMurderMystery.dataForSave.nameProtagonist = await AMurderMystery.ƒS.Speech.getInput();
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T03);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T04);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T05);
        let dialogueElement = await AMurderMystery.ƒS.Menu.getInput(text.option, "option");
        switch (dialogueElement) {
            case text.option.Vampire:
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T07);
                AMurderMystery.dataForSave.chosenBook = "Vampire";
                console.log(AMurderMystery.dataForSave.chosenBook);
                break;
            case text.option.Ritual:
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T07);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T08);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T08);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T09);
                AMurderMystery.dataForSave.chosenBook = "Ritual";
                console.log(AMurderMystery.dataForSave.chosenBook);
                break;
        }
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 800, 0, true);
        AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
    }
    AMurderMystery.Scene1 = Scene1;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene2() {
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
        };
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.update(1);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        let firstChoice = await AMurderMystery.ƒS.Menu.getInput(text.murderWeaponChoice, "option");
        switch (firstChoice) {
            case text.murderWeaponChoice.knive:
                AMurderMystery.dataForSave.bookWeapon = text.murderWeaponChoice.knive;
                break;
            case text.murderWeaponChoice.rope:
                AMurderMystery.dataForSave.bookWeapon = text.murderWeaponChoice.rope;
                break;
        }
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        let secondChoice = await AMurderMystery.ƒS.Menu.getInput(text.crimeSceneChoice, "option");
        switch (secondChoice) {
            case text.crimeSceneChoice.bigBen:
                AMurderMystery.dataForSave.bookCrimeScene = text.crimeSceneChoice.bigBen;
                break;
            case text.crimeSceneChoice.tower:
                AMurderMystery.dataForSave.bookCrimeScene = text.crimeSceneChoice.tower;
                break;
        }
    }
    AMurderMystery.Scene2 = Scene2;
})(AMurderMystery || (AMurderMystery = {}));
/* export async function Scene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");

    let text = {
        protagonist: {

        },
        ash: {

        }
    }
} */ 
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene2_2() {
        console.log("FudgeStory Template Scene2_2 starting");
        let text = {
            protagonist: {
                T00: "Das … das ist doch der Mord aus meinem Buch? Jemand stellt einen Mord aus meinem Buch dar? Vielleicht sollte ich Ash schreiben?"
            },
            notification: {
                vampire: "Im Londoner Hide Park wurde die Leiche einer jungen Frau gefunden. Die Kehle des Opfers weist Bissspuren auf. Das Opfer lag auf einem Bett aus Rosen. Die Polizei bittet die Bevölkerung um Hinweise.",
                ritual: "Im Londoner Hide Park wurde die Leiche einer jungen Frau gefunden. Der Tatort weist Spuren eines rituellen oder religiösen Motivs auf. Die Polizei bittet die Bevölkerung um Hinweise."
            },
            choiceTextAsh: {
                yes: "Ja",
                no: "Nein"
            },
            textToAsh: {
                neutral: "Ich habe gerade die Nachrichten gesehen, und jemand hat eins meiner Bücher nachgestellt, nachdem wir gestern noch darüber geredet haben. Was für ein komischer Zufall, oder?",
                friendly: "Ich habe gerade in den Nachrichten gesehen, dass jemand einen meiner Morde nachstellt. Wer würde denn so etwas machen?",
                accusing: "Wir haben doch gestern noch über mein Lieblingsbuch geredet und heute wird genau dieser Mord nachgestellt? Das kann doch kein Zufall sein. Hast du etwas damit zu tun?"
            },
            ashAnswers: {
                neutralAnswer: "Ich habs auch grade gesehen. Wirklich ein komischer Zufall.",
                friendlyAnswer: "Ich weiß es nicht. Aber ich bin mir sicher, die Polizei wird sich darum kümmern und den Mörder finden.",
                accusingAnswer: "..."
            }
        };
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Phone);
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
        await AMurderMystery.ƒS.update(1);
        switch (AMurderMystery.dataForSave.chosenBook) {
            case "Vampire":
                await AMurderMystery.ƒS.Speech.tell("Phone", text.notification.vampire);
                break;
            case "Ritual":
                await AMurderMystery.ƒS.Speech.tell("Phone", text.notification.ritual);
                break;
        }
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        let thirdChoice = await AMurderMystery.ƒS.Menu.getInput(text.choiceTextAsh, "option");
        switch (thirdChoice) {
            case text.choiceTextAsh.yes:
                let fourthChoice = await AMurderMystery.ƒS.Menu.getInput(text.textToAsh, "bigOption");
                switch (fourthChoice) {
                    case text.textToAsh.neutral:
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.textToAsh.neutral);
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ashAnswers.neutralAnswer);
                        AMurderMystery.dataForSave.pointsAsh += 0;
                        break;
                    case text.textToAsh.friendly:
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.textToAsh.friendly);
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ashAnswers.friendlyAnswer);
                        AMurderMystery.dataForSave.pointsAsh += 100;
                        break;
                    case text.textToAsh.accusing:
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.textToAsh.accusing);
                        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ashAnswers.accusingAnswer);
                        break;
                }
                break;
            case text.choiceTextAsh.no:
                break;
        }
        console.log(AMurderMystery.dataForSave.pointsAsh);
    }
    AMurderMystery.Scene2_2 = Scene2_2;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene3() {
        let text = {
            protagonist: {
                T00: "Die Polizei hat mich grade angerufen und möchte mich befragen, damit ich ihnen bei den Ermittlungen helfen kann, schließlich hat der Mord mit meinem Buch zu tun. Ich sollte besser die Notizen zusammensuchen, damit ich später alle Details weiß.",
                T01: "Ah … hier hab ich sie hingetan. Okay, ich packe die Zettel am besten in meine Tasche.",
                T02: "Das sollten alle sein. Dann auf zur Polizeistation."
            }
        };
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.update(1);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        AMurderMystery.ƒS.Inventory.add(AMurderMystery.items.pageRitual);
        AMurderMystery.ƒS.Inventory.add(AMurderMystery.items.pageVampire);
        await AMurderMystery.ƒS.Inventory.open();
        await AMurderMystery.ƒS.update();
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
    }
    AMurderMystery.Scene3 = Scene3;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene4() {
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
        };
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.PoliceStation);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Officer, AMurderMystery.characters.Officer.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update();
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T03);
        switch (AMurderMystery.dataForSave.chosenBook) {
            case "Vampire":
                let dialogueElementVamp = await AMurderMystery.ƒS.Menu.getInput(text.crimeSceneVampire, "option");
                switch (dialogueElementVamp) {
                    case text.crimeSceneVampire.right:
                        AMurderMystery.dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        AMurderMystery.dataForSave.pointsOfficer -= 50;
                        break;
                }
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T04);
                let scndDialgoueElementVamp = await AMurderMystery.ƒS.Menu.getInput(text.weaponVampire, "option");
                switch (scndDialgoueElementVamp) {
                    case text.weaponVampire.right:
                        AMurderMystery.dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        AMurderMystery.dataForSave.pointsOfficer -= 50;
                        break;
                }
                break;
            case "Ritual":
                let dialogueElementRit = await AMurderMystery.ƒS.Menu.getInput(text.crimeSceneRitual, "option");
                switch (dialogueElementRit) {
                    case text.crimeSceneRitual.right:
                        AMurderMystery.dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        AMurderMystery.dataForSave.pointsOfficer -= 50;
                        break;
                }
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T04);
                let scndDialogueElementRit = await AMurderMystery.ƒS.Menu.getInput(text.weaponRitual, "option");
                switch (scndDialogueElementRit) {
                    case text.weaponRitual.right:
                        AMurderMystery.dataForSave.pointsOfficer += 50;
                        break;
                    default:
                        AMurderMystery.dataForSave.pointsOfficer -= 50;
                        break;
                }
                break;
        }
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T05);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
        let tellAsh = await AMurderMystery.ƒS.Menu.getInput(text.tellAboutAsh, "option");
        switch (tellAsh) {
            case text.tellAboutAsh.T00:
                AMurderMystery.dataForSave.pointsOfficer += 50;
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T07);
                AMurderMystery.dataForSave.bonusScene = true;
                break;
            case text.tellAboutAsh.T01:
                AMurderMystery.dataForSave.pointsOfficer -= 20;
                break;
        }
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Officer);
    }
    AMurderMystery.Scene4 = Scene4;
})(AMurderMystery || (AMurderMystery = {}));
//# sourceMappingURL=AMurderMystery.js.map