import React, { useState } from "react";
import format from "../utils/formatter";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonBar = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: end;
  margin-right: 1em;
`;

const StyledTable = styled.table`
  flex: 1 0 auto;
  margin: 1em;
  border: 1px solid black;
`;

const TableHeader = styled.thead`
  background-color: #c0e8fa;
`;
const DataTable = ({ columns, data }) => {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.filter((column) => column.visible)
  );
  if (visibleColumns.length < 1) return null;

  const clickableColumn = visibleColumns[0].name;

  return (
    <>
      <ButtonBar>
        <StyledLink to={`/add`} title="Add movie">
          <button type="button">➕ Add movie</button>
        </StyledLink>
      </ButtonBar>
      <StyledTable>
        <TableHeader>
          <tr>
            {visibleColumns.map((column) => (
              <th key={column.name}>{column.label}</th>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <Link to={`/edit/${row.id}`} key={row.id}>
                <td key={clickableColumn}>{row[clickableColumn]}</td>
              </Link>

              {visibleColumns.slice(1).map((column) => (
                <td key={column.name}>
                  {format(row[column.name], column.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default DataTable;
