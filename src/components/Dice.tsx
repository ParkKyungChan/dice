/** @jsxImportSource @emotion/react */
import {css, keyframes} from "@emotion/react";
import Side from "./Side";
import {DICE_SIDES} from "../constants";

interface DiceProps {
  rotateXResult: number;
  rotateYResult: number;
  rotateZResult: number;
}

function Dice({rotateXResult, rotateYResult, rotateZResult}: DiceProps) {
  const diceSrcX = 200;
  const xAxisSpeed = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 40);
  const rotateXSpeed = Math.random() * 1000 + 1000;
  const rotateYSpeed = Math.random() * 1000 + 1000;
  const rotateZSpeed = 0;
  const rotateResistance = 0.6;

  const rotateKeyframe = `
  from {
    transform: translate3d(${diceSrcX}px,-250px, 0) rotateX(${rotateXResult + rotateXSpeed}deg) rotateY(${rotateYResult + rotateYSpeed}deg) rotateZ(${rotateZResult + rotateZSpeed}deg) scale3d(2, 2, 2);
  }
    10% {
    transform: translate3d(${diceSrcX + xAxisSpeed}px,0,0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance}deg) rotateZ(${rotateZResult + rotateZSpeed * rotateResistance}deg);
  }
  20%{
    transform: translate3d(${diceSrcX + xAxisSpeed * 2}px, -100px, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 2}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 2}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 2
  }deg) scale3d(1.4,1.4,1.4);
  }
  30%{
    transform: translate3d(${diceSrcX + xAxisSpeed * 3}px, -100px, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 3}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 3}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 3
  }deg) scale3d(1.6,1.6,1.6);
  }
  40%{    
    transform: translate3d(${diceSrcX + xAxisSpeed * 4}px, -75px, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 4}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 4}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 4
  }deg) scale3d(1.25,1.25,1.25);
  }
  50% {
    transform: translate3d(${diceSrcX + xAxisSpeed * 5}px, 0, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 5}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 5}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 5
  }deg)
  }
  60%{
    transform: translate3d(${diceSrcX + xAxisSpeed * 6}px, -50px, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 6}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 6}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 6
  }deg) scale3d(1.4,1.4,1.4);
  }
  70% {
    transform: translate3d(${diceSrcX + xAxisSpeed * 7}px, 0, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 7}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 7}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 7
  }deg) 
  }
  80% {
    transform: translate3d(${diceSrcX + xAxisSpeed * 8}px, -30px, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 8}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 8}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 8
  }deg) scale3d(1.1,1.1,1.1);
  }
  90%{
    transform: translate3d(${diceSrcX + xAxisSpeed * 9}px, 0, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 9}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 9}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 9
  }deg)
  }
  95%{
    transform: translate3d(${diceSrcX + xAxisSpeed * 9.5}px, 0, 0) rotateX(${rotateXResult + rotateXSpeed * rotateResistance ** 10}deg) rotateY(${rotateYResult + rotateYSpeed * rotateResistance ** 10}deg) rotateZ(${
    rotateZResult + rotateZSpeed * rotateResistance ** 10
  }deg) scale3d(1.07,1.07,1.07);
  }
  to {
    transform: translate3d(${diceSrcX + xAxisSpeed * 9.5}px, 0, 0) rotateX(${rotateXResult}deg) rotateY(${rotateYResult}deg) rotateZ(${rotateZResult}deg);
  }`;

  const bounce = keyframes`
  ${rotateKeyframe}`;

  return (
    <div
      css={css`
        width: 60px;
        height: 60px;
        position: absolute;
        top: 20rem;
        left: 20rem;
        transition: 0.5s;
        transform-style: preserve-3d;
        animation: ${bounce} 3s linear forwards;
      `}
    >
      <Side dots={3} direction={DICE_SIDES.FRONT} />
      <Side dots={6} direction={DICE_SIDES.BACK} />
      <Side dots={9} direction={DICE_SIDES.RIGHT} />
      <Side dots={12} direction={DICE_SIDES.LEFT} />
      <Side dots={15} direction={DICE_SIDES.TOP} />
      <Side dots={18} direction={DICE_SIDES.BOTTOM} />
    </div>
  );
}

export default Dice;
