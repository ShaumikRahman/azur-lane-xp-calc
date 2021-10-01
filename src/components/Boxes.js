const Boxes = ({data}) => {
  let special;
  let currentLevel;
  let nextLevel;
  let progress;
  let percentage;
  let maxRemaining;
  let maxPercentage;
  let plusLevel;
  let storedExp;

  let output;

  if (data) {
    //console.log(data);
    special = data.special;
    currentLevel = data.level;
    nextLevel = data.next;
    progress = data.progress;
    percentage = data.percentage;
    maxRemaining = data.maxProgress;
    maxPercentage = data.maxPercentage;
    plusLevel = data.plusLevel;
    storedExp = data.storedExp;

    if (currentLevel < 125) {
      output = (
        <p>
          The ships current EXP + stored EXP is {progress} which comes to level{" "}
          {currentLevel}, {maxRemaining} EXP until max level.
        </p>
      );
    } else {
      if (storedExp < 3000000) {
        output = (
          <p>
            The ship has reached max level. {storedExp} EXP out of 3M has been stored.
          </p>
        );
      } else {
        output = (
        <p>
          The ship has reached max level. 3000000 EXP out of 3M has been stored.
        </p>
      );
      }
    }

    // output = (
    //   <p>
    //     The ships current EXP + stored EXP is {progress} which comes to level{" "}
    //     {currentLevel}, {maxRemaining} EXP until max level.
    //   </p>
    // );
    
  } else {
    special = false;
    currentLevel = "~";
    nextLevel = "~";
    progress = 0;
    percentage = 0;
    maxRemaining = 0;
    maxPercentage = 0;
    plusLevel = false;

    output = <p>Enter ship level</p>;
  }

  return (
    <div className="boxes">
      <div className="outputSection second">
        <h2 className="sectionTitle">Current Level</h2>
        <div className="percentageNumbers">
          <p
            className="currentLevel"
            style={{ color: plusLevel ? "#e0ff00" : "" }}
          >
            {currentLevel}
          </p>
          <span className="space"></span>
          <p className="nextLevel">{nextLevel}</p>
        </div>
        <div
          className="percentageBar"
          style={{
            width: `${percentage}%`,
            background: special
              ? "linear-gradient(to bottom right, #AFA 15%, #AAF, #FAA 85%)"
              : "#e0ff00",
          }}
        ></div>
        <h2>{`${percentage}%`}</h2>
      </div>
      <div className="outputSection first">
        <h2 className="sectionTitle">Information</h2>
        <div className="info">{output}</div>
      </div>
      <div className="outputSection third">
        <h2 className="sectionTitle">Max Level</h2>
        <div className="percentageNumbers">
          <p className="currentLevel">{currentLevel}</p>
          <span className="space"></span>
          <p className="nextLevel">125</p>
        </div>
        <div
          className="percentageBar"
          style={{
            width: `${maxPercentage}%`,
            background: special
              ? "linear-gradient(to bottom right, #AFA 15%, #AAF, #FAA 85%)"
              : "#e0ff00",
          }}
        ></div>
        <h2>{`${maxPercentage}%`}</h2>
      </div>
    </div>
  );
};

export default Boxes;
