export const DICE_SIDE_TRANSFORM = {
  FRONT: "translateZ(30px)",
  RIGHT: "translateX(30px) rotateY(90deg)",
  LEFT: "translateX(-30px) rotateY(-90deg)",
  TOP: "translateY(-30px) rotateX(90deg)",
  BOTTOM: "translateY(30px) rotateX(-90deg)",
  BACK: "translateZ(-30px) rotateY(180deg)",
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

export const DICE_RESULT_DEGREE = {
  FRONT: {
    y: 0,
    z: 0,
  },
  BACK: {
    y: 180,
    z: 0,
  },
  TOP: {
    y: 90,
    z: -90,
  },
  BOTTOM: {
    y: 90,
    z: 90,
  },
  LEFT: {
    y: 90,
    z: 0,
  },
  RIGHT: {
    y: 90,
    z: 180,
  },
};
