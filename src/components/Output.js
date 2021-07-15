
const Output = ({ data }) => {

    let special;
    let currentLevel;
    let nextLevel;
    let progress;
    let percentage;
    let maxRemaining;
    let maxPercentage;
    let plusLevel;

    let output;

  if (data) {
    special = data.special
    currentLevel = data.level;
      nextLevel = data.next;
      progress = data.progress;
      percentage = data.percentage;
      maxRemaining = data.maxProgress;
      maxPercentage = data.maxPercentage;
      plusLevel = data.plusLevel;

      output = <p>The ships current EXP + stored EXP is {progress} which comes to level {currentLevel}, {maxRemaining} EXP until max level.</p>
      
  } else {
    special = false;
    currentLevel = '~';
      nextLevel = '~';
      progress = 0;
      percentage = 0;
      maxRemaining = 0;
      maxPercentage = 0;
      plusLevel = false;

      output = <p>Enter ship level</p>;
  }

  return <div className="App__Output">
    <div className="outputSection second">
      <h2 className="sectionTitle">Current Level</h2>
      <div className="percentageNumbers">
        <p className="currentLevel" style={{color: plusLevel ? '#e0ff00' : ''}}>
          {currentLevel}
        </p>
        <span className="space"></span>
        <p className="nextLevel">
          {nextLevel}
        </p>
      </div>
      <div className="percentageBar" style={{width: `${percentage}%`, background: special ? 'linear-gradient(to right, magenta, turquoise)' : '#e0ff00'}}>
      </div>
      <h2>{`${percentage}%`}</h2>
    </div>
    <div className="outputSection first">
    <h2 className="sectionTitle">Information</h2>
    <div className="info">
      {output}
    </div>
    </div>
    <div className="outputSection third">
    <h2 className="sectionTitle">Max Level</h2>
    <div className="percentageNumbers">
        <p className="currentLevel">
          {currentLevel}
        </p>
        <span className="space"></span>
        <p className="nextLevel">
          120
        </p>
      </div>
      <div className="percentageBar" style={{width: `${maxPercentage}%`, background: special ? 'linear-gradient(to right, magenta, turquoise)' : '#e0ff00'}}>
      </div>
      <h2>{`${maxPercentage}%`}</h2>
    </div>
  </div>;
};

export default Output;
