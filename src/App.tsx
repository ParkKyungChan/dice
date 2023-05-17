/** @jsxImportSource @emotion/react */
import {useState} from "react";
import Dice from "./components/Dice";
import {css} from "@emotion/react";

function App() {
  const [rotateXResult, setRotateXResult] = useState(0);
  const [rotateYResult, setRotateYResult] = useState(0);
  const [rotateZResult, setRotateZResult] = useState(0);

  const handleOnClickButton = () => {
    setRotateXResult(Math.floor(Math.random() * 3) * 90 + 5);
    setRotateYResult(Math.floor(Math.random() * 4) * 90 - 85);
    setRotateZResult(Math.floor(Math.random() * 4) * 90 - 85);
  };

  return (
    <>
      <button onClick={handleOnClickButton}>굴리기!</button>
      <Dice rotateXResult={rotateXResult} rotateYResult={rotateYResult} rotateZResult={rotateZResult} />
    </>
  );
}

export default App;
