import React, { useEffect, useState } from "react";

import Home from "./components/Pages/Home";
import {
  Container,
  GloabalStyle,
  MainWrapper,
  Moon,
  Sun,
  ThemeButton,
} from "./styles/GlobalStyles.styles";

import { Theme } from "./styles/Theme";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import VideoDetails from "./components/Pages/Video";
import Browse from "./components/Pages/Browse";
import Trending from "./components/Pages/Trending";
import SignUp from "./components/Pages/Signup";
import SignIn from "./components/Pages/SignIn";
import Profile from "./components/Pages/Profile";
import { userLoggedIn } from "./Features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./services/store";


function App() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isDarkTheme = theme === "darkTheme";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "lightTheme" : "darkTheme");
    localStorage.setItem("theme", isDarkTheme ? "lightTheme" : "darkTheme");
  };
  useEffect(() => {
    const storage = localStorage.getItem("theme") || "";
    setTheme(storage);
  }, [theme]);


  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user")
    if(!loggedInUser){
      navigate("/")
    }else{
      const foundUser = JSON.parse(loggedInUser);
      dispatch(userLoggedIn(foundUser))
    }
    
      },[])

  return (
    <Theme theme={isDarkTheme}>
      <GloabalStyle />
        <MainWrapper>
          <Container>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video/">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
              </Route>
            </Routes>

            <Routes>
              <Route path="/foryou">
                <Route index element={<Browse />} />
                <Route path="video/">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
              </Route>
            </Routes>

            <Routes>
              <Route path="/trends">
                <Route index element={<Trending />} />
                <Route path="video/">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
              </Route>
            </Routes>

            <Routes>
              <Route path="/following">
                <Route index element={<Trending />} />
                <Route path="video/">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
              </Route>
            </Routes>

            <Routes>
              <Route path="/favorites">
                <Route index element={<Trending />} />
                <Route path="video/">
                  <Route path=":id" element={<VideoDetails />} />
                </Route>
              </Route>
            </Routes>
          </Container>

          {window.location.pathname === "/signup" ||
            window.location.pathname === "/signin" || (
              <ThemeButton>
                {isDarkTheme ? (
                  <Sun onClick={toggleTheme} />
                ) : (
                  <Moon onClick={toggleTheme} />
                )}
              </ThemeButton>
            )}
        </MainWrapper>
    </Theme>
  );
}

export default App;
