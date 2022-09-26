import React,{useEffect} from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState, store } from "../../services/store";
import {
  Badge,
  BellIcon,
  Container,
  FirstContainer,
  Image,
  Inputcontainer,
  LogoContainer,
  NavLogo,
  NotificationBox,
  ProfileBox,
  SearchIcon,
  SecondContainer,
  Signin,
  StyledInput,
  StyledNav,
} from "../../styles/Navbar.styles";
import CircleAvatar from "../CircleAvatar/CircleAvatar";

interface NavProps {
  sm?: boolean;
}

const Navbar = ({ sm }: NavProps) => {
  const navigate = useNavigate()
const useAppSelector:TypedUseSelectorHook<RootState> =useSelector
const {loggedIn} = useAppSelector((state) => state.User)
  const gotosignIn = ()=>{
    navigate("/signin")
  }

 

  return (
    <StyledNav sm={+sm!}>
      <Container>
        <FirstContainer>
          <LogoContainer>
            <Link to="/">
              <NavLogo width={30} height={25} fill="#7B2CBF" />
            </Link>
            <h3>Viewer</h3>
          </LogoContainer>
          <Inputcontainer>
            <StyledInput placeholder="Search" />
            <SearchIcon />
          </Inputcontainer>
        </FirstContainer>
        <SecondContainer>
     <Signin onClick={gotosignIn} style={{display : loggedIn ? "none" :"block"}}>Signin</Signin>
          <NotificationBox>
            <Badge>5</Badge>
            <BellIcon />
          </NotificationBox>
          <ProfileBox>
            <Link to="/profile">
              <CircleAvatar width={40} height={40} radius={50}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
              </CircleAvatar>
            </Link>
            {/* <Name>Tobi Mojeed</Name> */}
          </ProfileBox>
        </SecondContainer>
      </Container>
    </StyledNav>
  );
};

export default Navbar;
