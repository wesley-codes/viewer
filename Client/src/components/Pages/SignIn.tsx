import React from "react";
import styled from "styled-components";
import {
  FormContainer,
  Input,
  InputContainer,
  Label,
  LeftContainer,
  LogoName,
  RightContainer,
  SignUpLogo,
  IconContainer,
  Terms,
  BtnContainer,
  CreateBtn,
} from "../../styles/Signup.styles";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  background-color: #f6f6f6;
  height: 100vh;
  & h2 {
    color: #7b2cbf;
    text-align: center;
  }
  & p {
    text-align: center;
  }
`;
const SignIn = () => {
  return (
    <Container>
      <RightContainer>
        <IconContainer show="lg">
          <SignUpLogo />
          <LogoName>Viewer</LogoName>
        </IconContainer>



      </RightContainer>

      <LeftContainer>
        <IconContainer show="sm">
          <SignUpLogo />
          <LogoName>Viewer</LogoName>
        </IconContainer>
        <FormContainer>
          <h2>Login to Viewer</h2>
          <p>
            Don't have an account?
            <span style={{ marginLeft: "8px" }}>
              <Link
                to="/signUp"
                style={{ textDecoration: "none", color: "#7B2CBF" }}
              >
                Sign up
              </Link>
            </span>
          </p>

          <InputContainer>
            <Label>Email</Label>

            <Input placeholder="JohnDoe@gmail.com" />
          </InputContainer>

          <InputContainer>
            <Label>Password</Label>

            <Input placeholder="password" />
          </InputContainer>

          <BtnContainer>
            <CreateBtn>Login</CreateBtn>
          </BtnContainer>
        </FormContainer>
      </LeftContainer>
    </Container>
  );
};

export default SignIn;
