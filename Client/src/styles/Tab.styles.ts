import { Mobile, Tablet } from './../Utils/respsonsive';
import styled from "styled-components";







export const ListItem = styled.li<any>`
  list-style: none;
  
`;

export const TabsContainer = styled.div`
display: flex;
align-items:center;
  padding:0 30px ;
  background-color: ${({theme}) => theme.profileDashboard };
  ${Tablet({display:"flex", justifyContent:"space-between"})};

  ${Mobile({padding: "0 "})}

`;

export const TabsButton = styled.button<any>`
margin-right: 20px;
border: none;
padding: 8px ;
text-align: center;

border-bottom: ${({isActive, theme})=> isActive && `2px solid ${theme.text}`};

background-color: ${({theme}) => theme.profileDashboard };
  color: ${({theme}) => theme.text};
  ${Mobile({margin: "0 10px", padding:"5px"})}
`

export const TabsPaneContainer = styled.div`
padding: 10px;
`