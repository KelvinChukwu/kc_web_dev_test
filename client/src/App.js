
import './App.css';
import { useState, useEffect } from 'react';


/**
 * For psets just directly get name and doi
 * for pset-databse, name can get directly, doi, need to go one level into repositories, take the first result but null check just in case
*/
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/psets")
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => ({ name: pSet.name, doi: pSet.doi }))));
  }, []);


  return (
    <div className="App">
      <p>{!data ? "Loading..." : data.map(pSet => <div>{pSet.name}</div>)}</p>
    </div>
  );
}

export default App;
