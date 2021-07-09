import { useState } from "react";
const normalLevels = require("./../json/normal.json");
const specialLevels = require("./../json/special.json");

const InputForm = () => {
  const [level, setLevel] = useState("");
  const [exp, setExp] = useState("");
  const [special, setSpecial] = useState(false);

  const calculate = (e) => {
    e.preventDefault();

    if (level) {
      if (special) {
        specialLevels.forEach((levelInfo) => {
          if (level === levelInfo.Level) {
            let index = specialLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let tempExp = exp;

            while (tempExp > toNext) {
              tempExp = tempExp - toNext;
              index++;
              toNext = specialLevels[index].Next;
            }

            console.log(`The Ships true level is ${
              specialLevels[index].Level
            } with ${tempExp} points of stored EXP, 
            ${((tempExp / toNext) * 100).toFixed(2)}% progress towards ${
              specialLevels[++index].Level
            }`);
          }
        });
      } else {
        normalLevels.forEach((levelInfo) => {
          if (level === levelInfo.Level) {
            let index = normalLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let tempExp = exp;
            let plusLevel = false;

            while (tempExp > toNext) {
              plusLevel = true;
              tempExp = tempExp - toNext;
              index++;
              toNext = normalLevels[index].Next;
            }

            console.log();

            if (!plusLevel) {
              console.log(`The ships level is still ${
                normalLevels[index].Level
              } with ${((tempExp / toNext) * 100).toFixed(2)}% progress towards level ${
                normalLevels[++index].Level
              }`);
            } else {
              console.log(`The Ships true level is ${
                normalLevels[index].Level
              } with ${tempExp} points of stored EXP, 
            ${((tempExp / toNext) * 100).toFixed(2)}% progress towards level ${
                normalLevels[++index].Level
              }`);
            }
          }
        });
      }
    }
  };

  return (
    <>
      <form className="App__Inputs" onSubmit={calculate}>
        <div className="inputsContainer">
          <input
            min="1"
            max="120"
            placeholder="Level"
            type="number"
            className="Level"
            name="level"
            value={level}
            onChange={(e) => {
              setLevel(parseInt(e.target.value));
            }}
          />
          <input
            min="1"
            placeholder="Ship Experience"
            type="number"
            className="Exp"
            name="exp"
            value={exp}
            onChange={(e) => {
              setExp(e.target.value);
            }}
          />
        </div>
        <div className="specialContainer">
          <label htmlFor="special"> UR/DR </label>
          <input
            type="checkbox"
            name="special"
            className="special"
            defaultChecked={special}
            onChange={(e) => {
              setSpecial(e.target.checked);
            }}
          />
        </div>
        <div className="submitContainer">
          <input type="submit" className="submit" value="Calculate" />
        </div>
      </form>
    </>
  );
};

export default InputForm;
