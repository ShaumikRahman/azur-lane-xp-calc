import { useState } from "react";
const normalLevels = require("./../json/normal.json");
const specialLevels = require("./../json/special.json");

const InputForm = ({controlMessage}) => {
  const [level, setLevel] = useState('');
  const [exp, setExp] = useState('');
  const [special, setSpecial] = useState(false);

  const clear = (e) => {
    e.preventDefault();
    setLevel('');
    setExp('');
    document.getElementById('form').reset();
    controlMessage();
  }

  const calculate = (e) => {
    e.preventDefault();
    //console.clear();

    if (level && level !== 120) {
      if (special) {
        specialLevels.forEach((levelInfo) => {
          const maxExp = specialLevels[119].Total;
          if (level === levelInfo.Level) {
            const currentExp = levelInfo.Total;
            const initialStoredExp = exp;
            let index = specialLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let storedExp = exp;
            let plusLevel = false;
            let progress = parseInt(initialStoredExp + currentExp);
            

            while (storedExp >= toNext) {
              plusLevel = true;
              storedExp = storedExp - toNext;
              index++;
              if (index !== 119) {
                try {
                  toNext = specialLevels[index].Next;
                } catch (error) {
                  storedExp = 0;
                  index = 119;
                }
              }
            }

            if (typeof storedExp !== 'number') {
              storedExp = 0;
            }


            let _next;
            let _maxProgress;
            let _maxPercentage;
            if (index !== 119) {
              _next = specialLevels[index+1].Level;
              _maxProgress = (maxExp - (currentExp + storedExp));
              _maxPercentage = (((currentExp + storedExp) / maxExp) * 100).toFixed(2);
            } else {
              _next = 120;
              _maxProgress= 0;
              _maxPercentage = 100;
            }
            const _level = specialLevels[index].Level;
            const percentage = ((storedExp / toNext) * 100).toFixed(2);

            // if (!plusLevel) {
            //   console.log(`The ships level is ${_level} with ${percentage}% progress towards level ${_next} and ${_maxProgress} remaining EXP / ${_maxPercentage}% progress towards max level`);
            // } else {
            //   console.log(`The ships level is ${_level} with ${initialStoredExp} stored EXP, ${percentage}% progress towards level ${_next} and ${_maxProgress} remaining EXP / ${_maxPercentage}% progress towards max level`);
            // }


            let data = {
              "special": special, 
              "plusLevel": plusLevel,
              "level": _level,
              "progress": progress,
              "percentage": percentage,
              "next": _next,
              "maxProgress": _maxProgress,
              "maxPercentage": _maxPercentage,
              "storedExp": initialStoredExp
            }
            
            controlMessage(data);
          }
        });
      } else {
        const maxExp = normalLevels[119].Total;
        normalLevels.forEach((levelInfo) => {
          if (level === levelInfo.Level) {
            const currentExp = levelInfo.Total;
            const initialStoredExp = exp;
            let index = normalLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let storedExp = exp;
            let plusLevel = false;
            let progress = parseInt(initialStoredExp + currentExp);

            

            while (storedExp >= toNext) {
              plusLevel = true;
              storedExp = storedExp - toNext;
              index++;
              if (index !== 119) {
                try {
                  toNext = normalLevels[index].Next;
                } catch (error) {
                  storedExp = 0;
                  index = 119;
                }
              }
            }

            if (typeof storedExp !== 'number') {
              storedExp = 0;
            }

            let _next;
            let _maxProgress;
            let _maxPercentage;
            if (index !== 119) {
              _next = normalLevels[index+1].Level;
              _maxProgress = (maxExp - (currentExp + storedExp));
              _maxPercentage = (((currentExp + storedExp) / maxExp) * 100).toFixed(2);
              
            } else {
              _next = 120;
              _maxProgress= 0;
              _maxPercentage = 100;
            }
            const _level = normalLevels[index].Level;
            const percentage = ((storedExp / toNext) * 100).toFixed(2);
            

            // if (!plusLevel) {
            //   console.log(`The ships level is ${_level} with ${percentage}% progress towards level ${_next} and ${_maxProgress} remaining EXP / ${_maxPercentage}% progress towards max level`);
            // } else {
            //   console.log(`The ships level is ${_level} with ${initialStoredExp} stored EXP, ${percentage}% progress towards level ${_next} and ${_maxProgress} remaining EXP / ${_maxPercentage}% progress towards max level`);
            // }

            // let data = [
            //   special, plusLevel, _level, percentage, _next, _maxPercentage, _maxProgress, initialStoredExp
            // ]

            let data = {
              "special": special, 
              "plusLevel": plusLevel,
              "level": _level,
              "progress": progress,
              "percentage": percentage,
              "next": _next,
              "maxProgress": _maxProgress,
              "maxPercentage": _maxPercentage,
              "storedExp": initialStoredExp
            }

            

            controlMessage(data);

          }
        });
      }
    } else {
      window.alert('Please enter a VALID level (1-119)');
    }
  };

  return (
    <>
      <form className="App__Inputs" id="form" onSubmit={calculate}>
        <div className="inputsContainer">
          <input
            min="1"
            max="119"
            placeholder="Level"
            type="number"
            className="Level"
            name="level"
            value={level}
            onChange={(e) => {
              if (!e.target.value) {
                setLevel(0);
              } else {
                setLevel(parseInt(e.target.value));
              }
            }}
          />
          <input
            min="0"
            placeholder="Ship Experience"
            type="number"
            className="Exp"
            name="exp"
            onChange={(e) => {
              if (!e.target.value) {
                setExp(0);
              } else {
                setExp(parseInt(e.target.value));
              }
            }}
          />
          <button className="clear" type="button" name="clear" onClick={(e) => clear(e)}>
          X
          </button>
        </div>
        <div className="specialContainer">
          <label htmlFor="special" className="specialLabel"> UR/DR </label>
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
          <input type="submit" className="submit" value="Calculate"/>
        </div>
      </form>
    </>
  );
};

export default InputForm;
