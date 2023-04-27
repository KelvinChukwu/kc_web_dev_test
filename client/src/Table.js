import React from "react";
import { useFilters, useTable } from "react-table";
import './Table.css'

export default function Table({ columns, data, defaultColumn }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data,
        defaultColumn
    }, useFilters);

    return (
        <table class = 'table' {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th class ='table_header' {...column.getHeaderProps()}>
                                {column.render("Header")}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr class = 'data_cell' {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}