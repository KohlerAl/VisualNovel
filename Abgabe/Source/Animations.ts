namespace AMurderMystery {
  export function AnimationLeveToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function AnimationRightToComputer(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(200, 100) },
      end: { translation: ƒS.positionPercent(20, 100) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function AnimationComputerToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function AnimationProtagonistLeave(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(10, 100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
}