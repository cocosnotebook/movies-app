import React from "react";
import { getColumns, getRow, saveRow } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input``;

const InputContainer = styled.div`
  padding: 0.5em;
`;

const ButtonBar = styled.div`
  padding: 0.5em;
`;

const Detail = () => {
  const navigate = useNavigate();

  const params = useParams();
  const row = getRow(parseInt(params.itemId, 10));
  const columns = getColumns();

  const onChange = (e, columnName) => {
    row[columnName] = e.target.value;
  };

  const checkRequired = () => {
    const required = columns.filter(
      (column) => column.required && !row[column.name]
    );
    return required.length === 0;
  };

  const goBack = () => navigate("/");

  const saveForm = (e) => {
    if (checkRequired()) {
      saveRow(row);
      goBack();
    } else {
      alert("Fill in required fields.");
    }
  };

  return (
    <Container>
      {columns.map(
        (column) =>
          column.visible && (
            <InputContainer>
              <label for={column.name}>{column.label}</label>
              {column.required && <span>*</span>}
              <br />
              <FormInput
                key={column.name}
                id={column.name}
                type={column.type}
                onChange={(e) => onChange(e, column.name)}
                defaultValue={row[column.name]}
                required={column.required}
              ></FormInput>
              <br />
            </InputContainer>
          )
      )}
      <ButtonBar>
        <button type="button" onClick={goBack}>
          Cancel
        </button>
        <button type="button" onClick={saveForm}>
          Save
        </button>
      </ButtonBar>
    </Container>
  );
};

export default Detail;
