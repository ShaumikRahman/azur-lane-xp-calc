import { useState } from "react";
import Boxes from "./Boxes";
import small from "../img/Small.png";
import medium from "../img/Medium.png";
import large from "../img/Large.png";
import boss from "../img/Boss.png";
import happy from "../img/ReallyHappy.png";
import flag from "../img/Flag.png";
const stages = require("../json/stages.json");

const Output = ({ data }) => {
  const [stage, setStage] = useState("12-4");
  const [rank, setRank] = useState(true);
  const [mood, setMood] = useState(true);
  const [runs, setRuns] = useState(false);

  let flagMvp1;
  let flagMvp2;
  let flagMvp3;
  let flagMvp4;

  let mvp1;
  let mvp2;
  let mvp3;
  let mvp4;

  let standard1;
  let standard2;
  let standard3;
  let standard4;

  if (data) {
    console.log("data");
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

    let values = [Easy, Normal, Hard, Boss];

    // here

    // flagMvp1 = world.Easy;
    // flagMvp2 = world.Normal;
    // flagMvp3 = world.Hard;
    // flagMvp4 = world.Boss;

    //console.log(flagMvp1);
  } else {
    console.log("none");
    flagMvp1 = "~";
    flagMvp2 = "~";
    flagMvp3 = "~";
    flagMvp4 = "~";

    mvp1 = "~";
    mvp2 = "~";
    mvp3 = "~";
    mvp4 = "~";

    standard1 = "~";
    standard2 = "~";
    standard3 = "~";
    standard4 = "~";
  }

  return (
    <div className="App__Output">
      <Boxes data={data} />
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
              className="rank"
              defaultChecked={rank}
              onChange={(e) => setRank(e.target.checked)}
            />
          </div>
          <div className="moodContainer center">
            <img src={happy} alt="happy" className="happy" />
            <label htmlFor="mood">119+ Morale: </label>
            <input
              type="checkbox"
              name="mood"
              defaultChecked={mood}
              onChange={(e) => setMood(e.target.checked)}
            />
          </div>
          <div className="switchContainer center">
            <label htmlFor="runs">Show runs: </label>
            <input
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
              <td>{flagMvp1}</td>
              <td>{flagMvp2}</td>
              <td>{flagMvp3}</td>
              <td>{flagMvp4}</td>
            </tr>
            <tr>
              <td>MVP</td>
              <td>{mvp1}</td>
              <td>{mvp2}</td>
              <td>{mvp3}</td>
              <td>{mvp4}</td>
            </tr>
            <tr>
              <td>Standard</td>
              <td>{standard1}</td>
              <td>{standard2}</td>
              <td>{standard3}</td>
              <td>{standard4}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Output;
