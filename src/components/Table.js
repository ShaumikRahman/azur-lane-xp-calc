import { useState } from "react";
import small from "../img/Small.png";
import medium from "../img/Medium.png";
import large from "../img/Large.png";
import boss from "../img/Boss.png";
import happy from "../img/ReallyHappy.png";
import flag from "../img/Flag.png";
import heclp from "../img/Plan.png";
import oilCan from "../img/Oil.png";
const stages = require("../json/stages.json");

const Table = ({ data }) => {
  const [stage, setStage] = useState("12-4");
  const [rank, setRank] = useState(true);
  const [mood, setMood] = useState(true);
  const [runs, setRuns] = useState(false);
  const [plan, setPlan] = useState(false);
  const [oil, setOil] = useState(15);

  let flagMvp = [];
  let flagMvpRuns = [];
  let mvp = [];
  let mvpRuns = [];
  let standard = [];
  let standardRuns = [];

  if (data) {
    //console.log("data");
    let maxLevelExp = data.maxProgress;
    let Easy;
    let Normal;
    let Hard;
    let Boss;

    stages.forEach((world) => {
      if (world.Stage === stage) {
        Easy = world.Easy;
        Normal = world.Normal;
        Hard = world.Hard;
        Boss = world.Boss;
      }
    });

    let diffs = [Easy, Normal, Hard, Boss];
    // 1.2, 2, 1.5, 1.2 always round down

    if (rank) {
      if (mood) {
        for (let i = 0; i < diffs.length; i++) {
          let temp = Math.trunc(diffs[i] * 1.2); //rank
          temp = Math.trunc(temp * 2); // mvp
          temp = Math.trunc(temp * 1.5); // flag
          temp = Math.trunc(temp * 1.2); // mood

          if (plan) {
            
            temp = temp * 2;
          }
          flagMvp[i] = temp;
          flagMvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); //rank
          temp = Math.trunc(temp * 2); // mvp
          temp = Math.trunc(temp * 1.2); // mood

          if (plan) {
            
            temp = temp * 2;
          }
          mvp[i] = temp;
          mvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); //rank
          temp = Math.trunc(temp * 1.2); // mood

          if (plan) {
            
            temp = temp * 2;
          }
          standard[i] = temp;
          standardRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));
        }
      } else {
        for (let i = 0; i < diffs.length; i++) {
          let temp = Math.trunc(diffs[i] * 1.2); //rank
          temp = Math.trunc(temp * 2); // mvp
          temp = Math.trunc(temp * 1.5); // flag

          if (plan) {
            
            temp = temp * 2;
          }
          flagMvp[i] = temp;
          flagMvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); //rank
          temp = Math.trunc(temp * 2); // mvp

          if (plan) {
            
            temp = temp * 2;
          }
          mvp[i] = temp;
          mvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); //rank

          if (plan) {
            
            temp = temp * 2;
          }
          standard[i] = temp;
          standardRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));
        }
      }
    } else {
      if (mood) {
        for (let i = 0; i < diffs.length; i++) {
          let temp = Math.trunc(diffs[i] * 1.2); // mood
          temp = Math.trunc(temp * 2); // mvp
          temp = Math.trunc(temp * 1.5); // flag

          if (plan) {
            
            temp = temp * 2;
          }
          flagMvp[i] = temp;
          flagMvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); // mood
          temp = Math.trunc(temp * 2); // mvp

          if (plan) {
            
            temp = temp * 2;
          }
          mvp[i] = temp;
          mvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 1.2); // mood

          if (plan) {
            
            temp = temp * 2;
          }
          standard[i] = temp;
          standardRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));
        }
      } else {
        for (let i = 0; i < diffs.length; i++) {
          let temp = Math.trunc(diffs[i] * 2); // mvp
          temp = Math.trunc(temp * 1.5); // flag

          if (plan) {
            
            temp = temp * 2;
          }
          flagMvp[i] = temp;
          flagMvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = Math.trunc(diffs[i] * 2); // mvp

          if (plan) {
            
            temp = temp * 2;
          }
          mvp[i] = temp;
          mvpRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));

          temp = diffs[i];

          if (plan) {
            
            temp = temp * 2;
          }
          standard[i] = temp;
          standardRuns[i] = parseFloat((maxLevelExp / temp).toFixed(0));
        }
      }
    }
  } else {
    //console.log("none");
    flagMvp = ["~", "~", "~", "~"];

    mvp = ["~", "~", "~", "~"];

    standard = ["~", "~", "~", "~"];

    flagMvpRuns = [0, 0, 0, 0];

    mvpRuns = [0, 0, 0, 0];

    standardRuns = [0, 0, 0, 0];
  }

  console.log(typeof oil)
  console.log(typeof standardRuns[0]);

  return (
    <div className="tableContainer">
      <div className="tableController">
        <div className="stageContainer center">
          <label htmlFor="select">Stage: </label>
          <select
            name="select"
            className="select"
            onChange={(e) => setStage(e.target.value)}
            value={stage}
          >
            <option value="1-1">1-1</option>
            <option value="1-2">1-2</option>
            <option value="1-3">1-3</option>
            <option value="1-4">1-4</option>
            <option value="2-1">2-1</option>
            <option value="2-2">2-2</option>
            <option value="2-3">2-3</option>
            <option value="2-4">2-4</option>
            <option value="3-1">3-1</option>
            <option value="3-2">3-2</option>
            <option value="3-3">3-3</option>
            <option value="3-4">3-4</option>
            <option value="4-1">4-1</option>
            <option value="4-2">4-2</option>
            <option value="4-3">4-3</option>
            <option value="4-4">4-4</option>
            <option value="5-1">5-1</option>
            <option value="5-2">5-2</option>
            <option value="5-3">5-3</option>
            <option value="5-4">5-4</option>
            <option value="6-1">6-1</option>
            <option value="6-2">6-2</option>
            <option value="6-3">6-3</option>
            <option value="6-4">6-4</option>
            <option value="7-1">7-1</option>
            <option value="7-2">7-2</option>
            <option value="7-3">7-3</option>
            <option value="7-4">7-4</option>
            <option value="8-1">8-1</option>
            <option value="8-2">8-2</option>
            <option value="8-3">8-3</option>
            <option value="8-4">8-4</option>
            <option value="9-1">9-1</option>
            <option value="9-2">9-2</option>
            <option value="9-3">9-3</option>
            <option value="9-4">9-4</option>
            <option value="10-1">10-1</option>
            <option value="10-2">10-2</option>
            <option value="10-3">10-3</option>
            <option value="10-4">10-4</option>
            <option value="11-1">11-1</option>
            <option value="11-2">11-2</option>
            <option value="11-3">11-3</option>
            <option value="11-4">11-4</option>
            <option value="12-1">12-1</option>
            <option value="12-2">12-2</option>
            <option value="12-3">12-3</option>
            <option value="12-4">12-4</option>
            <option value="13-1">13-1</option>
            <option value="13-2">13-2</option>
            <option value="13-3">13-3</option>
            <option value="13-4">13-4</option>
          </select>
        </div>
        <div className="rankContainer center">
          <label htmlFor="rank">S rank: </label>
          <input
            type="checkbox"
            name="rank"
            className="rank check"
            defaultChecked={rank}
            onChange={(e) => setRank(e.target.checked)}
          />
        </div>
        <div className="moodContainer center">
          <img src={happy} alt="happy" className="happy" />
          <label htmlFor="mood">119+ Morale: </label>
          <input
          className="check"
            type="checkbox"
            name="mood"
            defaultChecked={mood}
            onChange={(e) => setMood(e.target.checked)}
          />
        </div>
        <div className="switchContainer center">
          <label htmlFor="runs">Show runs: </label>
          <input
          className="check"
            type="checkbox"
            name="runs"
            defaultChecked={runs}
            onChange={(e) => setRuns(e.target.checked)}
          />
        </div>
        <div className="planContainer center">
          <img src={heclp} alt="plan" className="plan"/>
          <label htmlFor="plan"> </label>
          <input
          className="check"
            type="checkbox"
            name="plan"
            defaultChecked={plan}
            onChange={(e) => setPlan(e.target.checked)}
          />
        </div>
      </div>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th id="stage">{stage}</th>
            <th>
              <img src={small} alt="small" />
            </th>
            <th>
              <img src={medium} alt="medium" />
            </th>
            <th>
              <img src={large} alt="large" />
            </th>
            <th>
              <img src={boss} alt="boss" />
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <td>
              <img src={flag} alt="flag" className="flag" /> MVP
            </td>
            <td>{runs ? flagMvpRuns[0] : flagMvp[0]}</td>
            <td>{runs ? flagMvpRuns[1] : flagMvp[1]}</td>
            <td>{runs ? flagMvpRuns[2] : flagMvp[2]}</td>
            <td>{runs ? flagMvpRuns[3] : flagMvp[3]}</td>
          </tr>
          <tr>
            <td>MVP</td>
            <td>{runs ? mvpRuns[0] : mvp[0]}</td>
            <td>{runs ? mvpRuns[1] : mvp[1]}</td>
            <td>{runs ? mvpRuns[2] : mvp[2]}</td>
            <td>{runs ? mvpRuns[3] : mvp[3]}</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>{runs ? standardRuns[0] : standard[0]}</td>
            <td>{runs ? standardRuns[1] : standard[1]}</td>
            <td>{runs ? standardRuns[2] : standard[2]}</td>
            <td>{runs ? standardRuns[3] : standard[3]}</td>
          </tr>
        </tbody>
      </table>
      <div className="oilInput">
        <label htmlFor="oil"><img src={oilCan} className="oilCan" alt="oil" /> Cost of Ship </label>
        <input
        name="oil"
        type="number"
        max="19"
        value={oil}
        onChange={e => setOil(e.target.value)}
         />
      </div>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Oil Cost</th>
            <th>
              <img src={small} alt="small" />
            </th>
            <th>
              <img src={medium} alt="medium" />
            </th>
            <th>
              <img src={large} alt="large" />
            </th>
            <th>
              <img src={boss} alt="boss" />
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <td>
              <img src={flag} alt="flag" className="flag" /> MVP
            </td>
            <td><p>{flagMvpRuns[0] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{flagMvpRuns[1] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{flagMvpRuns[2] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{flagMvpRuns[3] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
          </tr>
          <tr>
            <td>MVP</td>
            <td><p>{mvpRuns[0] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{mvpRuns[1] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{mvpRuns[2] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{mvpRuns[3] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
          </tr>
          <tr>
            <td>Standard</td>
            <td><p>{standardRuns[0] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{standardRuns[1] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{standardRuns[2] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
            <td><p>{standardRuns[3] * parseInt(oil)}</p> <img src={oilCan} className="oilCan" alt="oil" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
