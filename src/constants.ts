export const DICE_SIDE_TRANSFORM = {
  FRONT: "translateZ(30px)",
  RIGHT: "translateX(30px) rotateY(90deg)",
  LEFT: "translateX(-30px) rotateY(-90deg)",
  TOP: "translateY(-30px) rotateX(90deg)",
  BOTTOM: "translateY(30px) rotateX(-90deg)",
  BACK: "translateZ(-30px)",
};

export const DICE_SIDES: {
  [key: string]: DiceSide;
} = {
  FRONT: "FRONT",
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
  BACK: "BACK",
};
