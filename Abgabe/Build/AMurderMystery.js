"use strict";
var AMurderMystery;
(function (AMurderMystery) {
    function AnimationLeveToRight() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(80, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(200, 100) },
            duration: 3,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationLeveToRight = AnimationLeveToRight;
    function AnimationRightToComputer() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(200, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(20, 100) },
            duration: 5,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationRightToComputer = AnimationRightToComputer;
    function AnimationComputerToRight() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(20, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(200, 100) },
            duration: 5,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationComputerToRight = AnimationComputerToRight;
    function AnimationProtagonistLeave() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(10, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(200, 100) },
            duration: 5,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationProtagonistLeave = AnimationProtagonistLeave;
    function AnimationStandStill() {
        return {
            start: { translation: AMurderMystery.ƒS.positionPercent(20, 100) },
            end: { translation: AMurderMystery.ƒS.positionPercent(20, 100) },
            duration: 3,
            playmode: AMurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    AMurderMystery.AnimationStandStill = AnimationStandStill;
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
        ending1: false,
        ending2: false,
        ending3: false,
        ending4: false,
        bonusScene: false,
        staywithAsh: false
    };
    console.log("FudgeStory template starting");
    AMurderMystery.transition = {
        transition1: {
            duration: 3,
            alpha: "Images/Transitions/t1.jpg",
            edge: 1 //hardness of transition
        },
        transition2: {
            duration: 3,
            alpha: "Images/Transitions/t2.jpg",
            edge: 1
        },
        transition3: {
            duration: 3,
            alpha: "Images/Transitions/t3.jpg",
            edge: 1
        },
        transition4: {
            duration: 3,
            alpha: "Images/Transitions/t4.jpg",
            edge: 1
        },
        transition5: {
            duration: 3,
            alpha: "Images/Transitions/t5.jpg",
            edge: 1
        },
        transition6: {
            duration: 3,
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
            background: "Images/Backgrounds/Police.png"
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
            "<br/>" +
            "Die Schrift ist von https://www.dafont.com/de/vcr-osd-mono.font");
    }
    AMurderMystery.showCredits = showCredits;
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        let meterBar = document.querySelector("#meter");
        meterBar.style.display = "initial";
        //Menu
        AMurderMystery.gameMenu = AMurderMystery.ƒS.Menu.create(AMurderMystery.inGameMenu, AMurderMystery.buttonFunctionalities, "gameMenu");
        AMurderMystery.gameMenu.close();
        AMurderMystery.ƒS.Speech.hide();
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            { id: "scene1", scene: AMurderMystery.Scene1, name: "Scene1" },
            { id: "scene2", scene: AMurderMystery.Scene2, name: "Scene2" },
            { id: "scene2_2", scene: AMurderMystery.Scene2_2, name: "Scene2_2" },
            { id: "scene3", scene: AMurderMystery.Scene3, name: "Scene3" },
            { id: "scene4", scene: AMurderMystery.Scene4, name: "Scene4" },
            { id: "sceneBonus", scene: AMurderMystery.SceneBonus, name: "SceneBonus" },
            { id: "scene5", scene: AMurderMystery.Scene5, name: "Scene5" },
            { id: "scene6", scene: AMurderMystery.Scene6, name: "Scene6" },
            { id: "scene7", scene: AMurderMystery.Scene7, name: "Scene7" },
            { id: "scene8", scene: AMurderMystery.Scene8, name: "Scene8" },
            { id: "scene9", scene: AMurderMystery.Scene9, name: "Scene9" },
            { id: "endings", scene: AMurderMystery.Endings, name: "Endings" },
            { id: "empty", scene: AMurderMystery.Empty, name: "Empty" },
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
        if (AMurderMystery.dataForSave.bonusScene) {
            AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
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
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
            await AMurderMystery.ƒS.update();
        }
    }
    AMurderMystery.SceneBonus = SceneBonus;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Empty() {
        console.log("The End");
    }
    AMurderMystery.Empty = Empty;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Endings() {
        let text = {
            ash: {
                //Ending 1
                T00: "Du hast mich also verraten?",
                T01: "ICH HAB DAS FÜR DICH GETAN",
                T02: "Ja. Deine Werke, ultimativ in Szene gesetzt. JEDER spricht jetzt über deine Bücher",
                T03: "Nein, sie haben dich kritisiert. Sie haben deine Arbeit in den Dreck gezogen. Und sie haben bekommen, was sie verdienen. ",
                T04: "Du siehst es nicht, aber es ist der ultimative Liebesbeweis. Ich verspreche dir, das nächste Mal mache ich es besser. ",
                //Ending 2 + 3
                T05: AMurderMystery.dataForSave.nameProtagonist + " ...",
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
        };
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        if (AMurderMystery.dataForSave.ending1) {
            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Phone);
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T01);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T02);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T03);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T04);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
            await AMurderMystery.ƒS.Speech.hide();
            await AMurderMystery.ƒS.update();
        }
        else if (AMurderMystery.dataForSave.ending2) {
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T05);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
            await AMurderMystery.ƒS.Speech.hide();
            await AMurderMystery.ƒS.update();
        }
        else if (AMurderMystery.dataForSave.ending3) {
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T05);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
            await AMurderMystery.ƒS.Speech.hide();
            await AMurderMystery.ƒS.update();
            await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.AnimationLeveToRight());
        }
        else if (AMurderMystery.dataForSave.ending4) {
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Officer, AMurderMystery.characters.Officer.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.ermittler.T00);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Officer);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
            await AMurderMystery.ƒS.Speech.hide();
            await AMurderMystery.ƒS.update();
        }
    }
    AMurderMystery.Endings = Endings;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene1() {
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
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0.2, 10, true);
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition2.duration, AMurderMystery.transition.transition2.alpha, AMurderMystery.transition.transition2.edge);
        AMurderMystery.ƒS.Speech.show();
        await AMurderMystery.ƒS.Speech.tell("Narrator", text.narrator.T00, false);
        AMurderMystery.dataForSave.nameProtagonist = await AMurderMystery.ƒS.Speech.getInput();
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        console.log(AMurderMystery.characters.Protagonist.name);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.happy, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update();
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
        await AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0, 2, true);
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
        await AMurderMystery.ƒS.update();
    }
    AMurderMystery.Scene1 = Scene1;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene2() {
        console.log("FudgeStory Template Scene1 starting");
        let text = {
            protagonist: {
                T00: "Ich sollte langsam wirklich mal mein neues Buch planen. Hmmm… Also als Erstes brauche ich eine Mordwaffe, damit ich weiß, was am Tatort sein muss.",
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
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.laptop, 0.1, 2, true);
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
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.laptop, 0, 2, true);
        await AMurderMystery.ƒS.update();
    }
    AMurderMystery.Scene2 = Scene2;
})(AMurderMystery || (AMurderMystery = {}));
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
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Phone);
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition1.duration, AMurderMystery.transition.transition1.alpha, AMurderMystery.transition.transition1.edge);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.smartphoneRing, 20, 10, false);
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
        await AMurderMystery.ƒS.update();
        switch (thirdChoice) {
            case text.choiceTextAsh.yes:
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
                await AMurderMystery.ƒS.update();
                AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.texting, 0.5, 10, true);
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
                        AMurderMystery.dataForSave.pointsAsh -= 100;
                        break;
                }
                AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
                break;
            case text.choiceTextAsh.no:
                break;
        }
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.texting, 0, 2, false);
        console.log(AMurderMystery.dataForSave.pointsAsh);
        await AMurderMystery.ƒS.update();
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
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        AMurderMystery.ƒS.Inventory.add(AMurderMystery.items.pageRitual);
        AMurderMystery.ƒS.Inventory.add(AMurderMystery.items.pageVampire);
        await AMurderMystery.ƒS.Inventory.open();
        await AMurderMystery.ƒS.update();
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.update();
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
                right: "Messer",
                T01: "Biss",
                T02: "Schlag"
            },
            tellAboutAsh: {
                T00: "Ja",
                T01: "Nein"
            }
        };
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.crowdTalking2, 0.15, 5, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.computer, 0.1, 5, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.pencil, 0.2, 3, true);
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.PoliceStation);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Officer, AMurderMystery.characters.Officer.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition2.duration, AMurderMystery.transition.transition2.alpha, AMurderMystery.transition.transition2.edge);
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
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
        AMurderMystery.ƒS.update();
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.crowdTalking2, 0, 2, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.computer, 0, 2, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.pencil, 0, 2, true);
    }
    AMurderMystery.Scene4 = Scene4;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene5() {
        let text = {
            protagonist: {
                T00: "Ich hoffe, das Schreiben lenkt mich ein bisschen ab. Ich denke, als Nächstes sollte ich mir überlegen, wer die Leiche findet.",
                T01: "Okay, sehr schön. Und jetzt das Mordmotiv.",
                T02: "Das schreibt sich ja wie von selbst, ich glaube so langsam habe ich einen guten Plan für mein Buch. Moment, wo hab ich denn mein Handy? Ich glaube, das habe ich vorhin im Wohnzimmer liegenlassen."
            },
            choiceWitness: {
                neighbor: "Ein besorgter Anwohner",
                friend: "Die beste Freundin des Opfers, die das Handy geortet hat"
            },
            motive: {
                jealousy: "Eifersucht",
                money: "Geld"
            }
        };
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition4.duration, AMurderMystery.transition.transition4.alpha, AMurderMystery.transition.transition4.edge);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.laptop, 0.2, 5, true);
        let witness = await AMurderMystery.ƒS.Menu.getInput(text.choiceWitness, "option");
        switch (witness) {
            case text.choiceWitness.friend:
                AMurderMystery.dataForSave.bookWitness = "der besten Freundin des Opfers";
                break;
            case text.choiceWitness.neighbor:
                AMurderMystery.dataForSave.bookWitness = "einem Nachbarn des Opfers";
                break;
        }
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        AMurderMystery.dataForSave.bookMotive = await AMurderMystery.ƒS.Menu.getInput(text.motive, "option");
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Protagonist);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.laptop, 0, 2, true);
        await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.AnimationProtagonistLeave());
        await AMurderMystery.ƒS.Speech.tell("", "");
        await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.AnimationRightToComputer());
        await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.AnimationStandStill());
        await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.AnimationComputerToRight());
    }
    AMurderMystery.Scene5 = Scene5;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene6() {
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
                T10: "Oh nein," + AMurderMystery.dataForSave.nameProtagonist + ". Warum hast du Angst?",
                T11: "Das wird nicht passieren, ich pass auf dich auf. Versprochen.",
                T12: "Wirklich wirklich. Mach dir keine Sorgen. Und ich bin mir sicher, die Polizei findet den Täter bald. ",
                T13: "Alles wird gut. Und du gehst ja heute zu deinen Freundinnen, oder? Das lenkt dich bestimmt ein bisschen ab. Ich kann dich auch hinbringen, wenn du möchtest, und später wieder abholen. ",
                T14: "Natürlich, alles für dich. Und in der Zwischenzeit geh ich irgendwo in ne Bar oder so."
            }
        };
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0.2, 10, true);
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
        console.log(AMurderMystery.dataForSave.pointsAsh);
        switch (AMurderMystery.dataForSave.pointsAsh) {
            case -200:
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
                await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T01);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
                await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
                await AMurderMystery.ƒS.Character.animate(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.AnimationLeveToRight());
                break;
            case -100:
            case 0:
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
                await AMurderMystery.ƒS.update();
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T02);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T03);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T04);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T05);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T07);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T08);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T07);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T09);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T08);
                break;
            case 100:
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.happy, AMurderMystery.ƒS.positionPercent(10, 100));
                await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.happy, AMurderMystery.ƒS.positionPercent(80, 100));
                await AMurderMystery.ƒS.update();
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T10);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T09);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T11);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T10);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T12);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T11);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T13);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T12);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T14);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T13);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T15);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T14);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T16);
                break;
        }
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0, 2, true);
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
        AMurderMystery.ƒS.update();
    }
    AMurderMystery.Scene6 = Scene6;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene7() {
        let text = {
            protagonist: {
                T00: "Nein, tut mir leid. Ich bin genauso ahnungslos wie Sie. ",
                T01: "Natürlich, aber jeder kann ja die Bücher gelesen haben.",
                T02: "Ich war gestern bei meinen Freundinnen, die mich ablenken wollten nach dem ersten Mord.",
                T03: "Das ist richtig. ",
                T04: "(Im Stillen) Ash war schon wieder unterwegs, und es ist wieder ein Mord passiert. So langsam glaube ich nicht, dass das ein Zufall war. Aber ich will sie nicht einfach so verdächtigen. Sollte ich dem Ermittler davon erzählen?",
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
        };
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.crowdTalking2, 0.15, 5, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.computer, 0.1, 5, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.pencil, 0.2, 3, true);
        AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
        await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.PoliceStation);
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
        await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Officer, AMurderMystery.characters.Officer.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
        await AMurderMystery.ƒS.update(AMurderMystery.transition.transition2.duration, AMurderMystery.transition.transition2.alpha, AMurderMystery.transition.transition2.edge);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T03);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T04);
        await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
        let tellAsh = await AMurderMystery.ƒS.Menu.getInput(text.tellAboutAsh, "option");
        switch (tellAsh) {
            case text.tellAboutAsh.no:
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T05);
                break;
            case text.tellAboutAsh.yes:
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T06);
                await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Officer, text.officer.T06);
                AMurderMystery.dataForSave.pointsOfficer += 50;
                AMurderMystery.dataForSave.pointsAsh -= 100;
                AMurderMystery.dataForSave.ending1 = true;
                break;
        }
        await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Officer);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.crowdTalking2, 0, 2, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.computer, 0, 2, true);
        AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.pencil, 0, 2, true);
    }
    AMurderMystery.Scene7 = Scene7;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene8() {
        let text = {
            protagonist: {
                T00: "Ich fühle mich immer noch schuldig, dass meinetwegen unschuldige Menschen ermordet wurden … Aber zum Glück habe ich nur zwei Bücher veröffentlicht, so hoffentlich hat der Spuk jetzt ein Ende. ",
                T01: "… Außer … ",
                T02: "Was, wenn der Mörder wieder anfängt zu morden, wenn mein neues Buch veröffentlicht wird?",
                //Nachrichten mit Ash
                T03: "Ash? ",
                T04: "Was hast du vor?",
                T05: "Ash bitte Antworte",
                T06: "ASH BITTE",
            },
            ash: {
                T00: "Ich werde dir zeigen, wie viel du mir bedeutest. Mach dir keine Sorgen. "
            }
        };
        if (!AMurderMystery.dataForSave.ending1) {
            AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition2.duration, AMurderMystery.transition.transition2.alpha, AMurderMystery.transition.transition2.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
            AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.texting, 0.5, 5, true);
            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Phone);
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition2.duration, AMurderMystery.transition.transition2.alpha, AMurderMystery.transition.transition2.edge);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
            await AMurderMystery.ƒS.update();
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T05);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T06);
            AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.texting, 0, 2, true);
        }
    }
    AMurderMystery.Scene8 = Scene8;
})(AMurderMystery || (AMurderMystery = {}));
var AMurderMystery;
(function (AMurderMystery) {
    async function Scene9() {
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
                T01: "Ist das nicht der ultimative Liebesbeweis? Ich habe für dich gemordet, " + AMurderMystery.dataForSave.nameProtagonist,
                T002: "Ich hoffe, du wirst es eines Tages verstehen",
                //Go to crime scene
                T02: "Ich glaube, wir wissen beide, warum ich hier bin. ",
                T03: "Der ultimative Liebesbeweis. Ich habe deine Bücher zum Leben erweckt und dich gegen deine Kritiker verteidigt.",
                T04: "Unschuldig? Sie haben dich kritisiert, deine Arbeit in den Dreck gezogen. Ich hab dir einen Gefallen getan.",
                T05: "Du liebst mich. ",
                //Phone Call
                T06: "Hallo, " + AMurderMystery.dataForSave.nameProtagonist,
                T07: "Es tut mir leid. Ich hätte dir meine Liebe besser zeigen sollen. Ich verspreche dir, ich werde es in Zukunft besser machen.",
            },
            news: {
                T00: "Die Mord-Serie geht weiter. Auch ein dritter Mord wurde ausgehend von Notizen von " + AMurderMystery.dataForSave.nameProtagonist + " Baker nachgestellt. Das Opfer wurde von " + AMurderMystery.dataForSave.bookWitness + " gefunden und mit " + AMurderMystery.dataForSave.bookWeapon + " ermordet. Die Ermittlungen dauern an. Die Bevölkerung ist angehalten, Hinweise der Polizei mitzuteilen. "
            },
            confrontAsh: {
                yes: "Ja",
                no: "Nein"
            },
            stay: {
                yes: "Ja",
                no: "Nein"
            }
        };
        if (!AMurderMystery.dataForSave.ending1) {
            AMurderMystery.characters.Protagonist.name = AMurderMystery.dataForSave.nameProtagonist;
            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Office);
            await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Protagonist, AMurderMystery.characters.Protagonist.pose.neutral, AMurderMystery.ƒS.positionPercent(10, 100));
            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
            AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.smartphoneRing, 20, 10, false);
            await AMurderMystery.ƒS.Speech.tell("Phone", text.news.T00);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T00);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T01);
            let confrontAsh = await AMurderMystery.ƒS.Menu.getInput(text.confrontAsh, "option");
            switch (confrontAsh) {
                case text.confrontAsh.yes:
                    AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0.5, 5, true);
                    await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.LivingRoom);
                    await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
                    await AMurderMystery.ƒS.update();
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T02);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T00);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T03);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T01);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T04);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T002);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T06);
                    AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.clock, 0, 2, true);
                    break;
                case text.confrontAsh.no:
                    AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.streetAmbiance, 0.05, 5, true);
                    switch (AMurderMystery.dataForSave.bookCrimeScene) {
                        case "Big Ben":
                            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.BigBen);
                            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
                            break;
                        case "Tower of London":
                            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.TowerOfLondon);
                            await AMurderMystery.ƒS.update(AMurderMystery.transition.transition6.duration, AMurderMystery.transition.transition6.alpha, AMurderMystery.transition.transition6.edge);
                            break;
                    }
                    await AMurderMystery.ƒS.Character.show(AMurderMystery.characters.Ash, AMurderMystery.characters.Ash.pose.neutral, AMurderMystery.ƒS.positionPercent(80, 100));
                    await AMurderMystery.ƒS.update();
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T07);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T02);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T08);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T03);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T09);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T04);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T10);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T05);
                    await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T11);
                    AMurderMystery.ƒS.Sound.fade(AMurderMystery.sound.streetAmbiance, 0, 2, true);
                    break;
            }
            await AMurderMystery.ƒS.Location.show(AMurderMystery.locations.Phone);
            await AMurderMystery.ƒS.update();
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T12);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T06);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, text.protagonist.T13);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Ash, text.ash.T07);
            await AMurderMystery.ƒS.Speech.tell(AMurderMystery.characters.Protagonist, "Sollte ich bei Ash bleiben?");
            let stayWithAsh = await AMurderMystery.ƒS.Menu.getInput(text.stay, "option");
            if (AMurderMystery.dataForSave.pointsOfficer > 0) {
                switch (stayWithAsh) {
                    case text.stay.yes:
                        AMurderMystery.dataForSave.ending2 = true;
                        break;
                    case text.stay.no:
                        AMurderMystery.dataForSave.ending3 = true;
                        break;
                }
            }
            else {
                AMurderMystery.dataForSave.ending4 = true;
            }
            await AMurderMystery.ƒS.Character.hide(AMurderMystery.characters.Ash);
        }
    }
    AMurderMystery.Scene9 = Scene9;
})(AMurderMystery || (AMurderMystery = {}));
//# sourceMappingURL=AMurderMystery.js.map