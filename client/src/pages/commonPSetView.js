import { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function CommonPSetView({ api_endpoint, dataMapFunction }) {
  const [data, setData] = useState([]);

  const rows_2 = useMemo(() => data.map((pSet, i) => ({ id: i, name: pSet.name, doi: pSet.doi })), [data]);

  const columns_2 = useMemo(() => [
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'doi',
      headerName: 'DOI',
      width: 320,
      renderCell: (props) => (<a href={props.value ?? '#'}>{props.value ?? '-'}</a>)
    },

  ], []);

  useEffect(() => {
    fetch(api_endpoint)
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => dataMapFunction(pSet))));
  }, [api_endpoint, dataMapFunction]);


  return (
    <div>
      <div style={{ width: '100%' }}>
        <DataGrid rows={rows_2} columns={columns_2} />
      </div>
    </div>
  );
}

