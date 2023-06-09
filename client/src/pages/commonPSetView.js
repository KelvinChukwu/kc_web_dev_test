import { useMemo, useState, useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function HeaderToolbar({ setFilterButtonElement }) {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonElement} />
    </GridToolbarContainer>
  );
}

HeaderToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

export default function CommonPSetView({ api_endpoint, dataMapFunction }) {
  const [data, setData] = useState([]);
  const [filterButtonElement, setFilterButtonElement] = useState(null);
  const rows = useMemo(() => data.map((pSet, i) => ({ id: i, name: pSet.name, doi: pSet.doi })), [data]);

  const columns = useMemo(() => [
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'doi',
      headerName: 'DOI',
      width: 320,
      renderCell: (props) => (<a href={props.value ?? '#'}>{props.value ?? '-'}</a>),
      filterable: false
    },

  ], []);

  useEffect(() => {
    fetch(api_endpoint)
      .then((res) => res.json())
      .then((data) => setData(data.map(pSet => dataMapFunction(pSet))));
  }, [api_endpoint, dataMapFunction]);


  return (
    <Box component="body" p={4}>
      <div style={{ width: '100%', alignSelf: 'flex-start', height: 700 }}>
        <DataGrid
          sx={
            {
              '.MuiDataGrid-columnHeaderTitle': { 'font-weight': 'bold' },
              '.MuiDataGrid-toolbarContainer': { 'position': 'sticky' }
            }
          }
          rows={rows}
          columns={columns}
          slots={{
            toolbar: HeaderToolbar,
          }}
          slotProps={{
            panel: {
              anchorEl: filterButtonElement,
            },
            toolbar: {
              setFilterButtonElement,
            },
          }}
          showColumnVerticalBorder={true}
          showCellVerticalBorder={true}
        />
      </div>
    </Box>
  );
}

