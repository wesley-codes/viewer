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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetails from "./components/Pages/Video";
import Browse from "./components/Pages/Browse";
import Trending from "./components/Pages/Trending";
import SignUp from "./components/Pages/Signup";
import SignIn from "./components/Pages/SignIn";
import Profile from "./components/Pages/Profile";
function App() {
  const [theme, setTheme] = useState("lightTheme");

  const isDarkTheme = theme === "darkTheme";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "lightTheme" : "darkTheme");
    localStorage.setItem("theme", isDarkTheme ? "lightTheme" : "darkTheme");
  };
  useEffect(() => {
    const storage = localStorage.getItem("theme") || "";
    setTheme(storage);
  }, [theme]);

  return (
    <Theme theme={isDarkTheme}>
      <GloabalStyle />
      <BrowserRouter>
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
      </BrowserRouter>
    </Theme>
  );
}

export default App;
