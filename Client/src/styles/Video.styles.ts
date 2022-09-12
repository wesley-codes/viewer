import { StyledButton } from './Button.styles';
import ReactPlayer from "react-player";
import { Mobile, Tablet } from "./../Utils/respsonsive";
import styled from "styled-components";
import DotSVG from "../components/SVG/Dot";
import HomeSVG from "../components/SVG/Home";
import Button from "../components/Button/Button";
import LikeSVG from '../components/SVG/Like';

export const Container = styled.div`
  border: 2px soild red;
  margin-top: 70px;
  display: flex;

  //background-color: red;
  ${Mobile({ flexDirection: "column" })}
`;
export const LeftWrapper = styled.div`
  flex: 5;
  ${Mobile({ flex: "0" })}
`;

export const LeftContainer = styled.div``;

export const VideoContainer = styled.div`
  position: sticky;
  border: 2px solid #9556cc;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Player = styled(ReactPlayer)``;

export const RightContainer = styled.div`
  padding: 0 15px;
  max-height: 100vh;
`;

export const InnerContainer = styled.div`
  flex: 2;
  max-height: 100vh;
  overflow: auto;
  ${Mobile({ padding: "0 10px 0 0px", maxHeight: "100vh" })}
`;

export const VideoBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 140px;

  height: 100%;
  object-fit: cover;
  ${Mobile({ width: "100px" })}
`;

export const VideoDetail = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

export const VideoName = styled.p<any>`
  margin: 0 ${({title})=> title ? "0px" : "8px"};
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  
`;

export const Duration = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #f9f9f9;
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelName = styled.p`
  word-wrap: break-word;
  word-wrap: break-word;
  font-size: small;
  padding: 0;
`;

export const ChannelAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  object-fit: cover;
`;

export const DotIcon = styled(DotSVG)`
  margin: 0 5px;
`;

//==========================

export const ControlWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const VideoTitle = styled.span``;
export const HomeIcon = styled(HomeSVG)``;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //width: 30% ;
`;

export const BottomContainer = styled.div``;

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const ControlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VideoDiv = styled.div`
  display: flex;
  ${Tablet({ flexDirection: "column" })}
  ${Mobile({ flexDirection: "column" })}
`;

export const InnerControls = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

export const BookmarkImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const BookmarkContainer = styled.div`
  margin-top: 10px;
  ${Mobile({ display: "none" })}
`;



export const DescpSection = styled.section`
  padding: 0 15px;
  position: sticky;
  top:10px
`;

export const VideoDescpTitle = styled.h2`
  color: ${({theme})=> theme.text}
`;

export const ActionContainer = styled.div`
  display: flex;
  ${Tablet({flexDirection:"column-reverse"})}

  ${Mobile({flexDirection:"column-reverse"})}
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  &, span{
    font-size: small;
    color: ${({theme})=> theme.text}
  }
`;


export const AvatarImg = styled.img`
  width: 50px;height:50px;
  border-radius: 50px;
  object-fit: cover;
`;

export const UserAction = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  ${Mobile({marginTop: "10px", paddingRight:"0"})}

`;


export const SubscribeBtn = styled(StyledButton)`
  padding: 8px 10px;
  border: none;
  background-color: ${({theme})=> theme.background};
  cursor: pointer;
`;


export const ActionBox = styled.div`
  flex:1;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const IconBox = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  cursor: pointer;
`;

export const LikeIcon = styled(LikeSVG)`
fill: #fff
`

export const IconLabel = styled.span`
color: ${({theme})=> theme.text};
font-weight: 800;
font-size: 12px;
margin-left: 5px;
${Tablet({display:"none"})};

${Mobile({display:"none"})}

`


export const ArticleSection = styled.div`
margin: 10px 0;

`


export const Article = styled.article`
font-weight: 600;
font-size: 0.9rem;
color: ${({theme})=> theme.text};

`



export const CommentWrapper = styled.div`
  display: flex;
  color: #9556cc;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  position: relative;
`;

export const CommentBox = styled.div`




`;



export const SortSelect = styled.div`
position: absolute;
top: 30px;
left: 150px
`

export const SortItem = styled.div`
padding: 10px;
background-color: ${({theme})=> theme.background};
border: 1px solid ${({theme})=> theme.text};
&:hover{
  color: ${({theme})=> theme.text};
  cursor: pointer;
}
`