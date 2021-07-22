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
  const [oil, setOil] = useState("15");

  let flagMvp = [];
  let flagMvpRuns = [];
  let mvp = [];
  let mvpRuns = [];
  let standard = [];
  let standardRuns = [];

  if (!Math.trunc) {
    console.log("polyfilled");
    Math.trunc = function (v) {
      return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
  }

  function handleOil(e) {
    e.preventDefault();
    setOil(e.target.value);
  }

  if (data) {
    document.getElementById("oil").removeAttribute("disabled");
    document.getElementById("oil").classList.remove("disabled");

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
          if (diffs[i] !== 0) {
            let xp = Math.trunc(diffs[i] * 1.2); //rank
            xp = Math.trunc(xp * 2); // mvp
            xp = Math.trunc(xp * 1.5); // flag
            xp = Math.trunc(xp * 1.2); // mood

            if (plan) {
              xp = xp * 2;
            }
            flagMvp[i] = xp;
            flagMvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); //rank
            xp = Math.trunc(xp * 2); // mvp
            xp = Math.trunc(xp * 1.2); // mood

            if (plan) {
              xp = xp * 2;
            }
            mvp[i] = xp;
            mvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); //rank
            xp = Math.trunc(xp * 1.2); // mood

            if (plan) {
              xp = xp * 2;
            }
            standard[i] = xp;
            standardRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));
          } else {
            flagMvp[i] = 0;
            flagMvpRuns[i] = 0;
            mvp[i] = 0;
            mvpRuns[i] = 0;
            standard[i] = 0;
            standardRuns[i] = 0;
          }
        }
      } else {
        for (let i = 0; i < diffs.length; i++) {
          if (diffs[i] !== 0) {
            let xp = Math.trunc(diffs[i] * 1.2); //rank
            xp = Math.trunc(xp * 2); // mvp
            xp = Math.trunc(xp * 1.5); // flag

            if (plan) {
              xp = xp * 2;
            }
            flagMvp[i] = xp;
            flagMvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); //rank
            xp = Math.trunc(xp * 2); // mvp

            if (plan) {
              xp = xp * 2;
            }
            mvp[i] = xp;
            mvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); //rank

            if (plan) {
              xp = xp * 2;
            }
            standard[i] = xp;
            standardRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));
          } else {
            flagMvp[i] = 0;
            flagMvpRuns[i] = 0;
            mvp[i] = 0;
            mvpRuns[i] = 0;
            standard[i] = 0;
            standardRuns[i] = 0;
          }
        }
      }
    } else {
      if (mood) {
        for (let i = 0; i < diffs.length; i++) {
          if (diffs[i] !== 0) {
            let xp = Math.trunc(diffs[i] * 1.2); // mood
            xp = Math.trunc(xp * 2); // mvp
            xp = Math.trunc(xp * 1.5); // flag

            if (plan) {
              xp = xp * 2;
            }
            flagMvp[i] = xp;
            flagMvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); // mood
            xp = Math.trunc(xp * 2); // mvp

            if (plan) {
              xp = xp * 2;
            }
            mvp[i] = xp;
            mvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 1.2); // mood

            if (plan) {
              xp = xp * 2;
            }
            standard[i] = xp;
            standardRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));
          } else {
            flagMvp[i] = 0;
            flagMvpRuns[i] = 0;
            mvp[i] = 0;
            mvpRuns[i] = 0;
            standard[i] = 0;
            standardRuns[i] = 0;
          }
        }
      } else {
        for (let i = 0; i < diffs.length; i++) {
          if (diffs[i] !== 0) {
            let xp = Math.trunc(diffs[i] * 2); // mvp
            xp = Math.trunc(xp * 1.5); // flag

            if (plan) {
              xp = xp * 2;
            }
            flagMvp[i] = xp;
            flagMvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = Math.trunc(diffs[i] * 2); // mvp

            if (plan) {
              xp = xp * 2;
            }
            mvp[i] = xp;
            mvpRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));

            xp = diffs[i];

            if (plan) {
              xp = xp * 2;
            }
            standard[i] = xp;
            standardRuns[i] = parseFloat((maxLevelExp / xp).toFixed(0));
          } else {
            flagMvp[i] = 0;
            flagMvpRuns[i] = 0;
            mvp[i] = 0;
            mvpRuns[i] = 0;
            standard[i] = 0;
            standardRuns[i] = 0;
          }
        }
      }
    }
  } else {
    //console.log("none");

    if (document.getElementById("oil")) {
      document.getElementById("oil").setAttribute("disabled", "");
      document.getElementById("oil").classList.add("disabled");
    }

    flagMvp = ["~", "~", "~", "~"];

    mvp = ["~", "~", "~", "~"];

    standard = ["~", "~", "~", "~"];

    flagMvpRuns = [0, 0, 0, 0];

    mvpRuns = [0, 0, 0, 0];

    standardRuns = [0, 0, 0, 0];
  }

  // console.log(typeof oil);
  // console.log(typeof standardRuns[0]);
  // console.log(plan);
  // console.log(flagMvpRuns[3] * oil * 2);

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
        <div className="planContainer center">
          <img src={heclp} alt="plan" className="plan" />
          <label htmlFor="plan"> </label>
          <input
            className="check"
            type="checkbox"
            name="plan"
            defaultChecked={plan}
            onChange={(e) => setPlan(e.target.checked)}
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
        <label htmlFor="oil">
          <img src={oilCan} className="oilCanSpecial" alt="oil" /> Cost of Ship:{" "}
        </label>
        <input
          id="oil"
          className="disabled"
          name="oil"
          type="number"
          min="1"
          max="19"
          value={oil}
          onChange={(e) => handleOil(e)}
          disabled
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
            <td>
              <p>
                {plan ? flagMvpRuns[0] * 2 * oil * 2 : flagMvpRuns[0] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? flagMvpRuns[1] * 2 * oil * 2 : flagMvpRuns[1] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? flagMvpRuns[2] * 2 * oil * 2 : flagMvpRuns[2] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? flagMvpRuns[3] * 2 * oil * 2 : flagMvpRuns[3] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
          </tr>
          <tr>
            <td>MVP</td>
            <td>
              <p>{plan ? mvpRuns[0] * 2 * oil * 2 : mvpRuns[0] * oil}</p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>{plan ? mvpRuns[1] * 2 * oil * 2 : mvpRuns[1] * oil}</p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>{plan ? mvpRuns[2] * 2 * oil * 2 : mvpRuns[2] * oil}</p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>{plan ? mvpRuns[3] * 2 * oil * 2 : mvpRuns[3] * oil}</p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>
              <p>
                {plan ? standardRuns[0] * 2 * oil * 2 : standardRuns[0] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? standardRuns[1] * 2 * oil * 2 : standardRuns[1] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? standardRuns[2] * 2 * oil * 2 : standardRuns[2] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
            <td>
              <p>
                {plan ? standardRuns[3] * 2 * oil * 2 : standardRuns[3] * oil}
              </p>{" "}
              <img src={oilCan} className="oilCan" alt="oil" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
