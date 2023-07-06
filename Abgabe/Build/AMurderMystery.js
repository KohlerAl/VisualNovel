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
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    AMurderMystery.ƒ = FudgeCore;
    AMurderMystery.ƒS = FudgeStory;
    AMurderMystery.dataForSave = {
        nameProtagonist: "",
        pointsAsh: 0,
        pointsOfficer: 0,
        bookWeapon: "",
        bookCrimeScene: "",
        bookWitness: "",
        bookMotive: ""
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
        clock: "Sounds/clock.mp3",
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
        wind: "Sounds/wind.mp3"
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
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            { id: "scene1", scene: AMurderMystery.Scene1, name: "Scene1" },
            { id: "scene2", scene: AMurderMystery.Scene1, name: "Scene1" },
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
    //Lautstärke Standard
    let volume = 5.0;
    //Sound lauter machen
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        AMurderMystery.ƒS.Sound.setMasterVolume(volume);
    }
    AMurderMystery.incrementSound = incrementSound;
    //Sound leiser machen
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
        }
    }
    AMurderMystery.buttonFunctionalities = buttonFunctionalities;
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
    async function Scene1() {
        console.log("FudgeStory Template Scene1 starting");
        let text = {
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
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.wind, 0.05, 0.12, true);
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(15, 100));
        await AMurderMystery.ƒS.update(1);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
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
                friendlyAnswer: "Ich weiß es nicht. Aber ich bin mir sicher, die Polizei wird sich darum kümmern und den Mörder finden."
            }
        };
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
//# sourceMappingURL=AMurderMystery.js.map