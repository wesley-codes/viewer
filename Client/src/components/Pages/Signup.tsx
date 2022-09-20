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
  EyeOpen,
  Eyeclose,
} from "../../styles/Signup.styles";
import { useUserSignupMutation } from "../../services/AuthApi";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type InputTypes = {
  channelName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();

  const [createUser, result] = useUserSignupMutation();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
      let {channelName, ...others} = data
  channelName = channelName.trim()[0].toUpperCase() + channelName.slice(1)
  console.log(channelName)
 
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

            <Input placeholder="SmartRex" {...register("channelName")} />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>

            <Input placeholder="JohnDoe@gmail.com" {...register("email")} type="email"/>
          </InputContainer>

          <InputContainer icon="true">
            <Label>Password</Label>

            <Input placeholder="password" {...register("password")} />
            <Eyeclose/>
          </InputContainer>

          <InputContainer>
            <Label>Confirm password</Label>

            <Input
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
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
