import React from "react";
import logo from './logo.svg';
import './App.css';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data.map(pSet => <div>{pSet.name}</div>)}</p>
      </header>
    </div>
  );
}

export default App;
