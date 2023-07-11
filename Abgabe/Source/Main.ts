namespace AMurderMystery {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let dataForSave = {
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

  export let transition = {
    transition1: {
      duration: 1,   //duration in seconds
      alpha: "Images/Transitions/t1.jpg",      //path to image
      edge: 1       //hardness of transition
    },
    transition2: {
      duration: 1,
      alpha: "Images/Transitions/t2.jpg",
      edge: 1
    },
    transition3: {
      duration: 1,
      alpha: "Images/Transitions/t3.jpg",
      edge: 1
    },
    transition4: {
      duration: 1,
      alpha: "Images/Transitions/t4.jpg",
      edge: 1
    },
    transition5: {
      duration: 1,
      alpha: "Images/Transitions/t5.jpg",
      edge: 1
    },
    transition6: {
      duration: 1,
      alpha: "Images/Transitions/t6.png",
      edge: 1
    },
  };

  export let sound = {
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

  export let locations = {

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

  export let characters = {
    Protagonist: {
      name: dataForSave.nameProtagonist,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        happy: "Images/Characters/protagonist_happy.png",
        neutral: "Images/Characters/protagonist_neutral.png"
      }
    },
    Ash: {
      name: "Ash",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        happy: "Images/Characters/ash_smile.png",
        neutral: "Images/Characters/ash_neutral.png"
      }
    },
    Officer: {
      name: "Officer",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        neutral: "Images/Characters/polizist.png"
      }
    }
  };

  export let items = {
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
  }

  //Credits anzeigen
  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print(
      "Dieser Visual Novel wurde mit FudgeStory im Sommersemester 2023 erstellt." +
      "<br/>" +
      "Von Alida Kohler, MKB7, 263819" +
      "<br/>" +
      "Die Hintergründe, Charaktere und Items wurden selbst in Aseprite gezeichnet." +
      "<br/>" +
      "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurde." +
      "<br/>" +
      "Die Soundelemente wurden von https://www.soundjay.com/ und https://freesound.org/ heruntergeladen" +
      "<br/>"
    );
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    console.log(2);
    let meterBar: HTMLDivElement = document.querySelector("#meter");
    meterBar.style.display = "initial"; 
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    gameMenu.close(); 

    ƒS.Speech.hide(); 
    //Szenen aufrufen bezogen auf die .TS Datei
    let scenes: ƒS.Scenes = [
      /* { id:"scene1",scene: Scene1, name: "Scene1" }, */
      /* { id:"scene2",scene: Scene2, name: "Scene2" }, */
      { id:"scene2_2",scene: Scene2_2, name: "Scene2_2" },
      { id:"scene3",scene: Scene3, name: "Scene3" },
      { id:"scene4",scene: Scene4, name: "Scene4" },
      { id:"sceneBonus",scene: SceneBonus, name: "SceneBonus" }, 
      { id:"scene5",scene: Scene5, name: "Scene5" },
      { id:"scene6",scene: Scene6, name: "Scene6" },
      { id:"scene7",scene: Scene7, name: "Scene7" },
      { id:"scene8",scene: Scene8, name: "Scene8"},
      { id:"scene9",scene: Scene9, name: "Scene9"},
      { id:"endings",scene: Endings, name: "Endings"},
      { id:"empty",scene: Empty, name: "Empty"},

    ];
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    // ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);


  }
}