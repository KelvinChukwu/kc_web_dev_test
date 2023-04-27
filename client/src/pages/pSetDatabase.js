import { useMemo, useState, useEffect } from 'react';
import Table  from '../Table';

/**
 * For psets just directly get name and doi
 * for pset-databse, name can get directly, doi, need to go one level into repositories, take the first result but null check just in case
*/

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}


function PSetDatabase() {
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
            Filter: DefaultColumnFilter,
          },
          {
            Header: "DOI",
            accessor: "doi",
            Cell: props =>  <a href={props.value}>{props.value}</a>
          },
        ],
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ""
    }),
    []
  );

  useEffect(() => {
    fetch("/api/psets")
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => ({ name: pSet.name, doi: ` https://doi.org/${pSet.doi}` }))));
  }, []);


  return (
    <div>
      <Table columns={columns} data={data} defaultColumn={defaultColumn} />
    </div>
  );
}

export default PSetDatabase;
