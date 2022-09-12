import { Mobile } from './../Utils/respsonsive';
import { StyledButton } from './Button.styles';
import styled from "styled-components"
import Button from "../components/Button/Button";

export const CommentContainer = styled.div<any>`
  padding:15px;
 // display: ${({screen}) => screen === "sm" && "none"};
  @media only screen and (max-width: 600px) {
    display: ${({screen}) => screen === "sm" ? "block" : "none" &&  screen === "lg" ? "none" : "block" };
  
  
  }

`;

export const CommentWrapper = styled.div`

`;

export const CommentBox = styled.div`
display: flex;
margin: 20px 0;
  
`;

export const CommentImage = styled.img`
width: 50px;
height:50px;
border-radius: 50px;
object-fit: cover;
cursor: pointer;
`


export const CommentDetails = styled.div`

margin-left: 10px;
`

export const LikeLength = styled.span`
color: ${({theme})=> theme.text};
font-weight: 600;
font-size: 0.8rem;
margin-left: 8px;

`

export const CommentName = styled.span`
color: ${({theme})=> theme.text};
font-weight: 600;
font-size: 0.8rem;



`


export const CommentTime = styled.span`
color: ${({theme})=> theme.text};
font-weight: 600;
font-size: 0.8rem;
margin-left: 10px;
`


export const Comment = styled.p`
color: ${({theme})=> theme.text};
font-size: 0.9rem;

`


export const ActionContainer = styled.div`
display: flex;
align-items: flex-start;
`

export const IconBox = styled.div`
cursor: pointer;
display: flex;
align-items: center;
`

export const ReplyFieldBox = styled.div`


`

export const ReplyFieldContainer = styled.div`
display: flex;
margin-top: 10px;

`



export const ReplyField = styled.input`
display: inline-block;
border: none;
background-color: transparent;
border-bottom: 3px solid #9556cc ;
outline: none;
width: 100%;
margin-left: 20px;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: end;

`

export  const CancelButton = styled(StyledButton)`
letter-spacing: 0.03em;
background-color: ${({theme})=> theme.background};
padding: 8px 15px;
border: none;
margin-top: 5px;
font-weight: 600;
cursor : pointer
`