/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {DICE_SIDE_TRANSFORM} from "../constants";

function Side({dots, direction}: {dots: number; direction: DiceSide}) {
  return (
    <div
      css={css`
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        background: white;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: ${DICE_SIDE_TRANSFORM[direction]};
      `}
    >
      {direction}
    </div>
  );
}

export default Side;
