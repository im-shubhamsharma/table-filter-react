import Filter from "./components/Filters/Filter";
import Table from "./components/Table/Table";
import "./App.scss";

function App() {

  

  return (
    <div className="app">
      <div className="filter-container">
        <Filter />
      </div>
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}

export default App;
