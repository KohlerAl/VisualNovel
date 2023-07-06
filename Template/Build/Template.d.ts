declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let locations: {
        background: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        location: {
            background: {
                name: string;
                background: string;
            };
        };
    };
    let transition: {};
    let sound: {};
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
            };
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
