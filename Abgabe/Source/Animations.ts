namespace AMurderMystery {
    export function AnimationLeftToRight(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positionPercent(15, 100) },
          end: { translation: ƒS.positions.bottomright },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
      export function AnimationLeftBorderToLeft(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positionPercent(75, 100) },
          end: { translation: ƒS.positionPercent(100, 100) },
          duration: 1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
      export function AnimationCenterToCenter(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
          end: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
      export function AnimationCenterToLeft(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positionPercent(40, 80)},
          end: { translation: ƒS.positionPercent(10, 80)},
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
      export function AnimationLeftToCenter(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positionPercent(10, 80)},
          end: { translation: ƒS.positionPercent(40, 80)},
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
      }
}