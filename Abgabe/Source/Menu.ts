namespace AMurderMystery {
    export let inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-",
        inventar: "Inventar",
    };

    let menu: boolean = false;

    //Menüfunktionen
    export let gameMenu: ƒS.Menu;
    //Lautstärke Standard
    let volume: number = 5.0;

    //Sound lauter machen
    export function incrementSound(): void {
        if (volume >= 10) return;
        volume += 0.5;
        ƒS.Sound.setMasterVolume(volume);
    }

    //Sound leiser machen
    export function decrementSound(): void {
        if (volume <= 0) return;
        volume -= 0.5;
        ƒS.Sound.setMasterVolume(volume);
    }

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
          //Speichern
          case inGameMenu.save:
            await ƒS.Progress.save();
            break;
          //Laden
          case inGameMenu.load:
            await ƒS.Progress.load();
            break;
          //Sound lauter
          case inGameMenu.volumeup:
            incrementSound();
            break;
          //Sound leiser
          case inGameMenu.volumedown:
            decrementSound();
            break;
          //Credits
          case inGameMenu.credits:
            showCredits();
            break;
        }
      }

    export async function hndKeyPress(_event: KeyboardEvent): Promise<any> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    gameMenu.close();
                    menu = false;
                } else {
                    console.log("Open");
                    gameMenu.open();
                    menu = true;
                }
                break;
        }
    }
}