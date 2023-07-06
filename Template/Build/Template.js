"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.locations = {
        background: {
            name: "Background",
            background: "Images/cave3.png" // path to image file
            //foreground: "" // erst mal außen vor lassen, ist aber eine option 
        }
    };
    Template.dataForSave = {
        nameProtagonist: "Lily",
        location: Template.locations
    };
    console.log("FudgeStory template starting");
    Template.transition = {
    /* transition: {
       duration: 1,   //duration in seconds
       alpha: ""      //path to image
       edge: 1       //hardness of transition
    } */
    };
    Template.sound = {
    /*
      sound: ""      //path to sound file
    */
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                sad: ""
            }
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Test" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map