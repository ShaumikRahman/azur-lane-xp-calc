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

    if (level && level <= 120) {
      if (special) {
        const maxExp = specialLevels[119].Total;
        specialLevels.forEach((levelInfo) => {
          if (level === levelInfo.Level) {
            const currentExp = levelInfo.Total;
            const initialStoredExp = (exp.charAt(0) !== '0' ? parseInt(exp) : 0);
            console.log(typeof initialStoredExp);
            console.log(initialStoredExp);
            let index = specialLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let storedExp = (exp.charAt(0) !== '0' ? parseInt(exp) : 0);
            console.log(typeof storedExp);
            console.log(storedExp);
            let plusLevel = false;
            let progress = parseInt(initialStoredExp + currentExp);
            
            let max = false;
            while (storedExp >= toNext && !max) {
              plusLevel = true;
              storedExp = storedExp - toNext;
              index++;
              if (index < 119) {
                toNext = specialLevels[index].Next;
              } else {
                toNext = 3000000;
                max = true;
              }
            }

            if (typeof storedExp !== 'number') {
              storedExp = 0;
            }


            let _next;
            let _maxProgress;
            let _maxPercentage;
            if (index < 119) {
              _next = specialLevels[index+1].Level;
              _maxProgress = (maxExp - (currentExp + initialStoredExp));
              _maxPercentage = (((currentExp + initialStoredExp) / maxExp) * 100).toFixed(2);
            } else {
              _next = '3 Million';
              _maxProgress= 0;
              _maxPercentage = 100;
            }


            let _level;
            if (index < 119) {
              _level = specialLevels[index].Level;
           } else {
              _level = specialLevels[119].Level;
           }

           let percentage;
           if (max) {
             if (storedExp > 3000000) {
               percentage = ((3000000 / toNext) * 100).toFixed(2);
             } else {
               percentage = ((storedExp / toNext) * 100).toFixed(2);
             }
           } else {
             percentage = ((storedExp / toNext) * 100).toFixed(2);
           }
           
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
            const initialStoredExp = (exp.charAt(0) !== '0' ? parseInt(exp) : 0);
            let index = normalLevels.indexOf(levelInfo);
            let toNext = levelInfo.Next;
            let storedExp = (exp.charAt(0) !== '0' ? parseInt(exp) : 0);
            let plusLevel = false;
            let progress = parseInt(initialStoredExp + currentExp);
            
            
            let max = false;
            while (storedExp >= toNext && !max) {
              plusLevel = true;
              storedExp = storedExp - toNext;

              index++;
              if (index < 119) {
                toNext = normalLevels[index].Next;
              } else {
                toNext = 3000000;
                max = true;
              }
            }

            if (typeof storedExp !== 'number') {
              storedExp = 0;
            }

            let _next;
            let _maxProgress;
            let _maxPercentage;
            if (index < 119) {
              _next = normalLevels[index+1].Level;
              _maxProgress = (maxExp - (currentExp + initialStoredExp));
              _maxPercentage = (((currentExp + initialStoredExp) / maxExp) * 100).toFixed(2);
              
            } else {
              _next = '3 Million';
              _maxProgress= 0;
              _maxPercentage = 100;
            }

            let _level;
            if (index < 119) {
               _level = normalLevels[index].Level;
            } else {
               _level = normalLevels[119].Level;
            }
            
            let percentage;
            if (max) {
              if (storedExp > 3000000) {
                percentage = ((3000000 / toNext) * 100).toFixed(2);
              } else {
                percentage = ((storedExp / toNext) * 100).toFixed(2);
              }
            } else {
              percentage = ((storedExp / toNext) * 100).toFixed(2);
            }

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
              "storedExp": storedExp
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
            max="120"
            placeholder="Level"
            type="number"
            className="Level"
            name="level"
            value={level}
            onChange={(e) => {
              if (!e.target.value) {
                setLevel('');
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
                setExp('');
              } else {
                setExp(`${e.target.value}`);
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
