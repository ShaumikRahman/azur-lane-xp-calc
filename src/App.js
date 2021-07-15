import { useState } from "react";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

function App() {
  const [data, setData] = useState();

  const controlMessage = (info) => {
    setData(info);
  }

  return (
    <div className="App">
      <h1 className="App__Title">Azur Lane Experience Calculator</h1>
      <InputForm controlMessage={(e) => controlMessage(e)} />
      <Output data={data} />
    </div>
  );
}

export default App;
