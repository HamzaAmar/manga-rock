import React from "react";
import styled from "styled-components";

import FormInput from "../components/FormInput";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form``;
const Login = () => {
  return (
    <Container>
      <Form>
        <FormInput name="email" label="Email" />
        <FormInput name="password" type="password" label="Email" />
      </Form>
    </Container>
  );
};

export default Login;
