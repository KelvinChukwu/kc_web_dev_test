
import './App.css';
import { useMemo, useState, useEffect } from 'react';
import Table  from './Table';


/**
 * For psets just directly get name and doi
 * for pset-databse, name can get directly, doi, need to go one level into repositories, take the first result but null check just in case
*/
function App() {
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "PSet Data",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "DOI",
            accessor: "doi",
            Cell: props =>  <a href="url">{props.value}</a>
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    fetch("/api/psets")
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => ({ name: pSet.name, doi: ` https://doi.org/${pSet.doi}` }))));
  }, []);


  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
