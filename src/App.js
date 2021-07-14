import { useState } from "react";
import InputForm from "./components/InputForm";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState();

  const controlMessage = (data) => {
    setData(data);
  }

  let message;
  if (data) {
    message = <Message data={data} />
  }

  return (
    <div className="App">
      <h1 className="App__Title">Azur Lane Experience Calculator</h1>
      <InputForm handleData={controlMessage}/>
      {message}
    </div>
  );
}

export default App;
