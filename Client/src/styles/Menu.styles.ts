import { Link } from "react-router-dom";
import styled from "styled-components";
import BrowseSVG from "../components/SVG/Browse";
import FavoriteSVG from "../components/SVG/Favorites";
import FollowSVG from "../components/SVG/Follow";
import HomeSVG from "../components/SVG/Home";
import LogoSVG from "../components/SVG/Logo";
import LogoutSVG from "../components/SVG/Logout";
import MenuCloseSVG from "../components/SVG/MenuClose";
import RecentSVG from "../components/SVG/Recent";
import SavedSVG from "../components/SVG/Saved";
import TrendSVG from "../components/SVG/Trend";
import VideoSVG from "../components/SVG/Video";
import { svgStyles } from "./SvgStyles.styles";

export const StyledLink = styled(Link)`
text-decoration: none;
`


export const SideBar = styled.div<any>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ active }) => (active ? "220px" : "55px")};
  background: ${(props) => props.theme.background};
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
`;

export const LogoDetails = styled.div<any>`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ active }) => (active ? "space-between" : "center")};
`;

export const LogoIcon = styled(LogoSVG)<any>`
  //opacity: 0;

  display: ${({ active }) => (active ? "block" : "none")};
  transition: all 0.5s ease;
`;

export const LogoName = styled.div<any>`
  color: ${(props) => props.theme.logoName};
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  //opacity: 0;
  display: ${({ active }) => (active ? "block" : "none")};
  transition: all 0.5s ease;

  //TODO: WHEN SIDEBAR IS OPEN SET OPACITY TO 1
`;

export const MeuCloseIcon = styled(MenuCloseSVG)`
  ${svgStyles({
    width: "25px",
    height: "20px",
    fill: "#7B2CBF",
    top: "20%",
    transition: "transition: all 0.4s ease",
    textAlign: "center",
    cursor: "pointer",
    MozTransition: "all 0.5s ease",
    msTransition: "all 0.5s ease",
  })}
`;

export const NavList = styled.ul`
  margin-top: 20px;
  height: 100%;
  padding: 8px 0;
  
`;

export const LinkItem = styled.a<any>`
  display: flex;
  height: 30px;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  padding: 0 8px;
  transition: all 0.4s ease;
  //background: ${(props)=> props.theme.linkItem};
  align-items: center;
  justify-content: ${({ active }) => (active ? "" : "center")};
  &:hover {
    background: ${(props) => props.theme.linkItem};
  }
`;

export const TitleHeading = styled.h3<any>`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 13px;
  
  color: ${(props) => props.theme.titleHeading};  
  font-weight: 600;
  font-style: bold;
  letter-spacing: 0.03rem;
  display: ${({ active }) => (active ? "block" : "none")};
  padding: 0 8px;
`;

export const LinkName = styled.span<any>`
  color: #7b2cbf;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 400;
  white-space: nowrap;
  pointer-events: none;
  transition: 0.4s;
  display: ${({ active }) => (active ? "block" : "none")};
  font-weight: 600;
  font-style: bold;
  letter-spacing: 0.03rem;
  &:hover,
  ${LinkItem}:hover {
    transition: all 0.5s ease;
  }
`;

export const ToolTip = styled.span<any>`
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: green;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  //opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  display: none;
`;

export const ListItem = styled.li<any>`
  position: relative;
  margin: 8px 0;
  list-style: none;
  text-align: center;

  &:hover ${ToolTip} {
    display: ${({ active }) => (active ? "none" : "block")};

    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const HomeIcon = styled(HomeSVG)<any>`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const BrowseIcon = styled(BrowseSVG)`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const TrendIcon = styled(TrendSVG)`
 ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const FollowIcon = styled(FollowSVG)`
 ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const RecentIcon = styled(RecentSVG)`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const FavoriteIcon = styled(FavoriteSVG)`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    width: "20px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const SavedIcon = styled(SavedSVG)`
 ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const VideoIcon = styled(VideoSVG)`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`;

export const ProfileItem = styled.li<any>`
  position: fixed;
  height: 60px;
  width: ${({ active }) => (active ? "220px" : "60px")};
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: inherit;
  transition: all 0.5s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({ active }) => (active ? "space-between" : "center")};
`;

export const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const JobContainer = styled.div<any>`
  font-size: 1rem;
  font-weight: 700;
  font-style: bold;
  color: ${(props)=> props.theme.text};
  white-space: nowrap;

  display: ${({ active }) => (active ? "block" : "none")};
`;

export const NameBox = styled.div``;

export const Occupation = styled.div`
  ${NameBox}&{
   font-size: 40px;
  }
`;


export const LogoutIcon = styled(LogoutSVG)`
  ${(props ) => svgStyles({
   fill: props.theme.icons,
   height: "30px",
    minWidth: "20px",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "60px",
  })}
`