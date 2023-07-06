namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  
  export let dataForSave = {
    nameProtagonist: "Lily"
  };
  console.log("FudgeStory template starting");

  export let transition = {
    /* transition: {
       duration: 1,   //duration in seconds
       alpha: ""      //path to image
       edge: 1       //hardness of transition
    } */
  };

  export let sound = {
    /* 
      sound: ""      //path to sound file
    */
  };

  export let locations = {

    background: {
      name: "Background",
      background: "Images/cave3.png" // path to image file
      //foreground: "" // erst mal außen vor lassen, ist aber eine option 
    }

  };

  export let characters = {
    narrator: {
      name: ""
    },
    Lily: {
      name: "Lily",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "",
        sad: ""
      }
    }
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Test" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}