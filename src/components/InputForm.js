import { useState } from "react";

const InputForm = () => {
    const [level, setLevel] = useState('');
    const [exp, setExp] = useState('');


  const calculate = (e) => {
    e.preventDefault();

    if (level && exp) {
        console.log(`level is ${level} and exp is ${exp}`);
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
                setLevel(e.target.value);
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
        <div className="submitContainer">
            <input
              type="submit"
              className="submit"
              value="Calculate"
            />
        </div>
      </form>
    </>
  );
};

export default InputForm;
