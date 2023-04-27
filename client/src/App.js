import React from "react";
import './App.css';
/**
 * For psets just directly get name and doi
 * for pset-databse, name can get directly, doi, need to go one level into repositories, take the first result but null check just in case
*/
function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/psets")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data.map(pSet => <div>{pSet.name}</div>)}</p>
      </header>
    </div>
  );
}

export default App;
