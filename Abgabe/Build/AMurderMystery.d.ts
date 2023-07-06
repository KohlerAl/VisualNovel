declare namespace AMurderMystery {
    function AnimationLeftToRight(): ƒS.AnimationDefinition;
    function AnimationLeftBorderToLeft(): ƒS.AnimationDefinition;
    function AnimationCenterToCenter(): ƒS.AnimationDefinition;
    function AnimationCenterToLeft(): ƒS.AnimationDefinition;
    function AnimationLeftToCenter(): ƒS.AnimationDefinition;
}
declare namespace AMurderMystery {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        pointsAsh: number;
        pointsOfficer: number;
        bookWeapon: string;
        bookCrimeScene: string;
        bookWitness: string;
        bookMotive: string;
    };
    let transition: {
        transition1: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition2: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition3: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition4: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition5: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition6: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        clock: string;
        crowdTalking1: string;
        crowdTalking2: string;
        computer: string;
        laptop: string;
        pencil: string;
        smartphoneRing: string;
        streetAmbiance: string;
        telephoneRing: string;
        texting: string;
        traffic: string;
        wind: string;
    };
    let locations: {
        Office: {
            name: string;
            background: string;
        };
        LivingRoom: {
            name: string;
            background: string;
        };
        BigBen: {
            name: string;
            background: string;
        };
        PoliceStation: {
            name: string;
            background: string;
        };
        TowerOfLondon: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                neutral: string;
            };
        };
        Ash: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                neutral: string;
            };
        };
        Officer: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    function showCredits(): void;
}
declare namespace AMurderMystery {
    let inGameMenu: {
        save: string;
        load: string;
        credits: string;
        volumeup: string;
        volumedown: string;
        inventar: string;
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<any>;
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
declare namespace AMurderMystery {
}
