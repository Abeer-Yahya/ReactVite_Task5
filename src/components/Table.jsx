import React from "react";
import { useTable } from "react-table";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const data = [
    {
      programs: "Software Engineering",
      salary: "$75,100",
      rate: "88%",
      time: "180 days",
    },
    {
      programs: "Data Analytics",
      salary: "$62,500",
      rate: "84%",
      time: "180 days",
    },
    {
      programs: "Data Science",
      salary: "$89,000",
      rate: "87%",
      time: "180 days",
    },
  ];

  const columns = [
    {
      Header: "Programs",
      accessor: "programs",
    },
    {
      Header: "Median salary",
      accessor: "salary",
    },
    {
      Header: "Employment rate",
      accessor: "rate",
    },
    {
      Header: "Hired within",
      accessor: "time",
    },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
