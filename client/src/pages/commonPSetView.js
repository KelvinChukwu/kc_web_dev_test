import { useMemo, useState, useEffect } from 'react';
import Table from '../Table';

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


export default function CommonPSetView({api_endpoint}) {
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
            Cell: props => <a href={props.value ?? '#'}>{props.value ?? '-'}</a>
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
    fetch(api_endpoint)
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => ({ name: pSet.name, doi: pSet?.repositories[0]?.doi == null || pSet?.repositories[0]?.doi === ""  ? null : `https://doi.org/${pSet?.repositories[0]?.doi}` }))));
  }, [api_endpoint]);


  return (
    <div>
      <Table columns={columns} data={data} defaultColumn={defaultColumn} />
    </div>
  );
}

