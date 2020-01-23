import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const FormInput = ({ label, type = "text", name }) => {
  return (
    <Container>
      <label> {label} </label>
      <input type={type} name={name} />
    </Container>
  );
};

export default FormInput;
