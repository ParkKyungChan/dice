/** @jsxImportSource @emotion/react */
import {css, keyframes} from "@emotion/react";
import Side from "./Side";
import {DICE_SIDES} from "../constants";

function Dice() {
  return (
    <div
      css={css`
        width: 60px;
        height: 60px;
        position: absolute;
        top: 20rem;
        left: 20rem;
        transition: 0.5s;
        perspective: 1000rem;
        transform-style: preserve-3d;
        transform: rotateY(25deg) rotateY(25deg) rotateZ(25deg);
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
