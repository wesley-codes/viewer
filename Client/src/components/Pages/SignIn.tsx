import React, { useState, useEffect } from "react";
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
  BtnContainer,
  CreateBtn,
  ErrorContainer,
  ErrorMessage,
  Eyeclose,
  EyeOpen,
} from "../../styles/Signup.styles";
import { Link, useNavigate } from "react-router-dom";
import { useUserSigninMutation } from "../../services/AuthApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch,  RootState } from "../../services/store";
import { userLoggedIn } from "../../Features/UserSlice";
import { setCookie } from "../../Cookie/SetCookie";
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

type UserTypes = {
  _id: string;
  name: string;
  email: string;
  img: string;
  subscribers: number;
  token?: string;
  subscribedUsers: string[];
};

const SignIn = () => {
  const navigate = useNavigate();

  //Redux Dispatch 
  const dispatch = useDispatch<AppDispatch>();


//Redux Selector states

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const {likedLinked, currentUser} = useAppSelector(state => state.User)

  //Redux RTK Query
  const [loginUser, result] = useUserSigninMutation();


  //React useState Hooks
  const [user, setUser] = useState<UserTypes>();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState({
    errMsg: "",
    success: false,
  });

  //use Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  useEffect(() => {
    //if user exist navigate to homepage
if(currentUser){
  navigate("/")
}
}, []);

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    let { email, password } = data;
    email = email.trim()[0].toUpperCase() + email.slice(1);

    loginUser({ email, password: data.password })
      .unwrap()
      .then((data: any) => {
        const { token, ...other } = data;
        setCookie(token, 3);
        dispatch(userLoggedIn(other));
        //store user in local storage
        // localStorage.setItem("user", JSON.stringify(other));
        if(!likedLinked){
          navigate("/");
        }else{
          //navigate user to the particular link which he was about to like
          navigate(`${likedLinked}`) 
        }
      })
      .catch((err) => {
        const { data } = err;
        setErrorMessage({ success: data.success, errMsg: data.errMessage });
      });
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
                to="/signup"
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
