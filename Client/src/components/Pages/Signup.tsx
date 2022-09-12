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
const SignUp = () => {
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
          <h2>Get Started</h2>
          <p>
            Already having an account?{" "}
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "#7B2CBF" }}
            >
              Sign in
            </Link>
          </p>

          <InputContainer>
            <Label>Name</Label>

            <Input placeholder="John Doe"/>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>

            <Input placeholder="JohnDoe@gmail.com"/>
          </InputContainer>

          <InputContainer>
            <Label>Password</Label>

            <Input placeholder="password"/>
          </InputContainer>

          <InputContainer>
            <Label>Confirm password</Label>

            <Input placeholder="Confirm Password"/>
          </InputContainer>
          <Terms>
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </Terms>
          <BtnContainer>
            <CreateBtn>Create account</CreateBtn>
          </BtnContainer>
        </FormContainer>
      </LeftContainer>
    </Container>
  );
};

export default SignUp;
