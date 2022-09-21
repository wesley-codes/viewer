import React, { useState } from "react";
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
  ErrorContainer,
  ErrorMessage,
  Eyeclose,
  EyeOpen,
} from "../../styles/Signup.styles";
import { Link } from "react-router-dom";
import { useUserSigninMutation } from "../../services/AuthApi";
import { useForm, SubmitHandler } from "react-hook-form";

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

type InputTypes = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [loginUser, result] = useUserSigninMutation()
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [errorMessage , setErrorMessage] = useState({
    errMsg :"",
    success : false
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();



  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    let {  email , password} = data;
    email = email.trim()[0].toUpperCase() + email.slice(1);

 loginUser({email, password:data.password}).unwrap().then((data:any)=>{
  console.log(data)
 }).catch((err)=>{
  const {data} = err
  setErrorMessage({success:data.success, errMsg:data.errMessage})
 })
  };

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
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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

            <Input
              placeholder="JohnDoe@gmail.com"
              {...register("email", {
                required: "Field is required",
              })}
              type="email"
            />
          </InputContainer>
          <ErrorContainer>
            {" "}
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </ErrorContainer>

          <InputContainer icon="true">
            <Label>Password</Label>

            <Input
              placeholder="password"
              type={viewPassword ? "text" : "password"}
              {...register("password", {
                required: "Field is required",
                minLength: {
                  value: 5,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {viewPassword ? (
              <Eyeclose
                onClick={() => {
                  setViewPassword(!viewPassword);
                }}
              />
            ) : (
              <EyeOpen
                onClick={() => {
                  setViewPassword(!viewPassword);
                }}
              />
            )}{" "}
          </InputContainer>
          <ErrorContainer>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </ErrorContainer>
          <BtnContainer>
            <CreateBtn>Login</CreateBtn>
          </BtnContainer>
          
          <ErrorContainer msg="errMsg">
            {!errorMessage.success && (
              <ErrorMessage msg="errMsg">{errorMessage.errMsg}</ErrorMessage>
            )}
          </ErrorContainer>
        </FormContainer>
      </LeftContainer>
    </Container>
  );
};

export default SignIn;
