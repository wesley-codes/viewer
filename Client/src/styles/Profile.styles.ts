import { StyledButton } from './Button.styles';
import { Mobile } from "./../Utils/respsonsive";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.profileDashboard};
  display: flex;
  padding: 30px;
  position: relative;
  ${Mobile({ padding: "30px 10px" })};
`;

export const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 100px;
`;

export const ProfileBox = styled.div`
  margin: 0 25px;
  & h2 {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 1.2rem;
    ${Mobile({ fontSize: "1rem" })}
  }
  & p {
    color: ${({ theme }) => theme.linkItem};
    font-weight: 300;
  }
`;

//=============================//
//@@*********VIDEOS***********//
//============================//

export const VideoContaianer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


export const ImgIllustration = styled.img`

`

export const VideoBox= styled.div`
width: 70vh;
height:70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

color: ${({ theme }) => theme.text};
& h2{
    font-size: 1.5rem;

};
& p{
    font-size: 0.8rem;

}
`

export const UploadBtn = styled(StyledButton)`
color: ${({ theme }) => theme.text};
background-color:${({ theme }) => theme.profileDashboard}; ;
padding: 8px;
border: 1px solid ${({ theme }) => theme.text};
font-weight: 600;
font-size: large;
border-radius: 3px;
`

