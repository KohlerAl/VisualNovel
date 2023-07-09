namespace AMurderMystery {
    export async function Intro(): ƒS.SceneReturn {
        console.log("intro time");

        await ƒS.Location.show(locations.LivingRoom);
        await ƒS.update(1);


        
    }
}