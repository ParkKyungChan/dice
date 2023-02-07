/** @jsxImportSource @emotion/react */
import {css, keyframes} from "@emotion/react";
import Side from "./Side";
import {DICE_SIDES} from "../constants";

function Dice() {
  const diceSrcX = 200;
  const translateRatio = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 40 + 30);
  const rotateRatio = Math.random();
  const bounce = keyframes`
  from {
    transform: translate3d(${diceSrcX}px,-300px, 0) rotateY(25deg) rotateY(25deg) rotateZ(25deg);
  }
    14% {
    transform: translate3d(${diceSrcX + translateRatio}px,0,0) rotateY(125deg) rotateY(25deg) rotateZ(25deg);
  }
  28%{
    transform: translate3d(${diceSrcX + translateRatio * 2}px, -100px, 0) rotateY(225deg) rotateY(25deg) rotateZ(25deg);
  }
  42%{    
    transform: translate3d(${diceSrcX + translateRatio * 3}px, -150px, 0) rotateY(325deg) rotateY(25deg) rotateZ(25deg);
  }
  56% {
    transform: translate3d(${diceSrcX + translateRatio * 4}px, -75px, 0) rotateY(385deg) rotateY(25deg) rotateZ(25deg);
  }

  70% {
    transform: translate3d(${diceSrcX + translateRatio * 5}px, 0, 0) rotateY(425deg) rotateY(25deg) rotateZ(25deg);
  }

  85% {
    transform: translate3d(${diceSrcX + translateRatio * 6}px, -30px, 0) rotateY(525deg) rotateY(25deg) rotateZ(25deg);
  }
  to {
    transform: translate3d(${diceSrcX + translateRatio * 7}px,0,0) rotateY(625deg) rotateY(25deg) rotateZ(0deg);
  }
  `;

  return (
    <div
      css={css`
        width: 60px;
        height: 60px;
        position: absolute;
        top: 20rem;
        left: 20rem;
        transition: 0.5s;
        perspective: 100rem;
        transform-style: preserve-3d;
        transform: rotateY(25deg) rotateY(25deg) rotateZ(25deg);
        animation: ${bounce} 2s cubic-bezier(0.2, 0.05, 0.8, 0.8) infinite;
      `}
    >
      <Side dots={3} direction={DICE_SIDES.FRONT} />
      <Side dots={6} direction={DICE_SIDES.BACK} />
      <Side dots={9} direction={DICE_SIDES.RIGHT} />
      <Side dots={12} direction={DICE_SIDES.LEFT} />
      <Side dots={15} direction={DICE_SIDES.TOP} />
      <Side dots={18} direction={DICE_SIDES.BOTTOM} />;
    </div>
  );
}

export default Dice;
