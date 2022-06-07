import { getColumns, getRows } from "../utils/api";
import { useState } from "react";
import DataTable from "../components/datatable";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [data, setData] = useState(getRows());
  const columns = getColumns();

  return (
    <Container>
      <DataTable data={data} columns={columns}></DataTable>
    </Container>
  );
};

export default Home;
