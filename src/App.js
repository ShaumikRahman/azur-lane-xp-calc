import { useState } from "react";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

function App() {
  const [data, setData] = useState();

  const controlData = (info) => {
    setData(info);
  }

  return (
    <div className="App">
      <div className="App__Title">
        <h1>Azur Lane Experience Calculator</h1>
      </div>
      <InputForm controlMessage={(e) => controlData(e)} />
      <Output data={data} />
    </div>
  );
}

export default App;
