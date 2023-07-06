namespace AMurderMystery {
    export async function Scene2(): ƒS.SceneReturn {
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
        }
    }
}


/* export async function Scene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");

    let text = {
        protagonist: {

        },
        ash: {

        }
    }
} */