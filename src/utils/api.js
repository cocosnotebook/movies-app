import { demoData, columns } from "../demo/data";

export const getColumns = () => {
  return columns;
};

export const getRows = () => {
  return demoData;
};

export const getRow = (rowId) => {
  //return shallow copy
  return Object.assign(
    {},
    getRows().find((item) => item.id === rowId)
  );
};

export const saveRow = (newRow) => {
  //save changes to an existing row
  const idColumn = getIdColumnName();
  if (newRow.hasOwnProperty(idColumn) && newRow[idColumn]) {
    const row = getRows().find((item) => item[idColumn] === newRow[idColumn]);
    Object.assign(row, newRow);
  }
  //save as new row
  else {
    const nextId =
      getRows()
        .map((row) => row[idColumn])
        .sort()[getRows().length - 1] + 1;
    newRow[idColumn] = nextId;
    getRows().push(newRow);
  }
};

const getIdColumnName = () => {
  return getColumns().find((column) => column.type === "id").name;
};
