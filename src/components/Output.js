import Boxes from "./Boxes";
import Table from "./Table";

const Output = ({ data }) => {

  return (
    <div className="App__Output">
      <Boxes data={data} />
      <Table data={data} />
    </div>
  );
};

export default Output;
