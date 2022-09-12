import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  LogoDetails,
  LogoIcon,
  LogoName,
  MeuCloseIcon,
  NavList,
  SideBar,
  BrowseIcon,
  TrendIcon,
  FollowIcon,
  RecentIcon,
  VideoIcon,
  SavedIcon,
  FavoriteIcon,
  TitleHeading,
  ProfileDetail,
  ProfileItem,
  JobContainer,
  NameBox,
  Occupation,
  LogoutIcon,
  StyledLink,
} from "../../styles/Menu.styles";

import MenuItem from "./MenuItem";
interface MenuProps {
  darkTheme: boolean;
}

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <SideBar active={+active}>
      <LogoDetails active={+active}>
        <div style={{ display: "flex" }}>
          <LogoIcon width={30} height={25} fill="#7B2CBF" active={+active} />
          <LogoName active={+active}> Viewer</LogoName>
        </div>
        <MeuCloseIcon onClick={() => setActive(!active)} />
      </LogoDetails>
      <NavList>
        <TitleHeading active={+active}>MENU</TitleHeading>
        <StyledLink to="/">
        <MenuItem active={active} title="Home" tooltip="Home">
        <HomeIcon />
        </MenuItem>
        </StyledLink>
         <StyledLink to="/foryou">
        <MenuItem active={active} title="Browse" tooltip="Browse">
         <BrowseIcon />
        </MenuItem>
         </StyledLink>
          <StyledLink to="/trends">
        <MenuItem active={active} title="Trending" tooltip="Trending">
          <TrendIcon />
        </MenuItem>
          </StyledLink>
        <TitleHeading active={+active}>LIBRARY</TitleHeading>
          <StyledLink to="/following">
        <MenuItem active={active} title="Following" tooltip="Following">
          <FollowIcon />
        </MenuItem>
          </StyledLink>
        <MenuItem active={active} title="Recent" tooltip="Recent">
          <RecentIcon />
        </MenuItem>
        <MenuItem active={active} title="Favorites" tooltip="Favorites">
          <StyledLink to="/favorites">
          <FavoriteIcon />
          </StyledLink>
        </MenuItem>{" "}
        <MenuItem active={active} title="Saved" tooltip="Saved">
          <SavedIcon />
        </MenuItem>{" "}
        <MenuItem active={active} title="My videos" tooltip="My videos">
          <VideoIcon />
        </MenuItem>
        <ProfileItem active={+active}>
          <ProfileDetail>
            <JobContainer active={+active}>
              <NameBox>Eze Nnaemeka</NameBox>
              <Occupation>Web Designer</Occupation>
            </JobContainer>
          </ProfileDetail>
          <LogoutIcon />
        </ProfileItem>
      </NavList>
    </SideBar>
  );
};

export default Menu;
