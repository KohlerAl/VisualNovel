declare namespace AMurderMystery {
    function AnimationLeveToRight(): ƒS.AnimationDefinition;
    function AnimationRightToComputer(): ƒS.AnimationDefinition;
    function AnimationComputerToRight(): ƒS.AnimationDefinition;
    function AnimationProtagonistLeave(): ƒS.AnimationDefinition;
    function AnimationStandStill(): ƒS.AnimationDefinition;
}
declare namespace AMurderMystery {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        pointsAsh: number;
        pointsOfficer: number;
        chosenBook: string;
        bookWeapon: string;
        bookCrimeScene: string;
        bookWitness: string;
        bookMotive: string;
        ending1: boolean;
        ending2: boolean;
        ending3: boolean;
        ending4: boolean;
        bonusScene: boolean;
        staywithAsh: boolean;
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
        clock: string;
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
        Phone: {
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
    let items: {
        pageVampire: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pageRitual: {
            name: string;
            description: string;
            image: string;
            static: boolean;
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
    function SceneBonus(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Empty(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Endings(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene2_2(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene3(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene4(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene5(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene6(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene7(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene8(): ƒS.SceneReturn;
}
declare namespace AMurderMystery {
    function Scene9(): ƒS.SceneReturn;
}
