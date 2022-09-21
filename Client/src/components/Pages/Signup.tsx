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
  EyeOpen,
  Eyeclose,
  ErrorMessage,
  ErrorContainer,
} from "../../styles/Signup.styles";
import { useUserSignupMutation } from "../../services/AuthApi";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FlashOffOutlined } from "@material-ui/icons";

type InputTypes = {
  channelName: string;
  email: string;
  password: string;
  confirmPassword: string;
};


type ErrorType = {
  success : boolean
  status: number
  errMessage: string
}

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();

  const password = watch("password", "");
  const [createUser, {error}] = useUserSignupMutation();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
const [errorMessage , setErrorMessage] = useState({
  errMsg :"",
  success : false
})
  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    let { channelName, email, ...others } = data;
   email = email.trim()[0].toUpperCase() + email.slice(1);

    channelName = channelName.trim()[0].toUpperCase() + channelName.slice(1);
    createUser({ name: channelName, email:email, ...others })
      .unwrap()
      .then((data) => {
        navigate(`/signin`);
      })
      .catch((err) => {
        const {data} = err
        console.log({success: data.success, errMsg:data.errMessage});
        setErrorMessage({success: data.success, errMsg:data.errMessage})
      });
    console.log(channelName);

  };
        //  console.log("error comming from rtk",error)

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
            <Label>ChannelName</Label>

            <Input
              placeholder="SmartRex"
              {...register("channelName", {
                required: "Field is required",
              })}
            />
          </InputContainer>
          <ErrorContainer>
            {errors.channelName && (
              <ErrorMessage>{errors.channelName.message}</ErrorMessage>
            )}
          </ErrorContainer>
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

          <InputContainer icon="true">
            <Label>Confirm password</Label>

            <Input
              placeholder="Confirm Password"
              type={confirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Field is required",
                validate: (val) =>
                  val === password || "The passwords do not match",
              })}
            />
            {confirmPassword ? (
              <Eyeclose
                onClick={() => {
                  setConfirmPassword(!confirmPassword);
                }}
              />
            ) : (
              <EyeOpen
                onClick={() => {
                  setConfirmPassword(!confirmPassword);
                }}
              />
            )}
          </InputContainer>
          <ErrorContainer>
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </ErrorContainer>
          <Terms>
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </Terms>
          <BtnContainer>
            <CreateBtn>Create Account</CreateBtn>
            
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

export default SignUp;
