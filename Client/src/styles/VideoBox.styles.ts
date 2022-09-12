import styled, { keyframes } from "styled-components";
import DotSVG from "../components/SVG/Dot";
import { Tablet, Mobile } from "../Utils/respsonsive";

// @-webkit-keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
// @keyframes scale-up-center {

// }

const pulseAnimate = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
`;

export const VideoCard = styled.video`
  /* ${Tablet({ flex: "1 1 auto", margin: " 0" })};
${Mobile({ width: "100%", flex: "1 1 auto", margin: " 0 0px 0px, 0" })}  */
  width: 100%;
  height: 202px;
  border-radius: 10px;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 202px;
  object-fit: cover;
  flex: 1;
  border-radius: 10px;
`;

export const VideoWrapper = styled.div``;

export const VideoCardContainer = styled.div`
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% - 77%);
  transition: all 0.5s ease;
  margin: 10px;
  ${Mobile({ flexBasis: "100%" })}

  ${Tablet({ flexBasis: "25%" })};

  @media only screen and (max-width: 694px) {
    flex-basis: calc(100% - 55%);
  }

  @media only screen and (max-width: 993px) {
    flex-basis: calc(100% - 70%);
  }

  &:hover {
    -webkit-animation: 0.5s ${pulseAnimate} 2s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: 0.5s ${pulseAnimate} 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

export const Details = styled.div`
  p {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const ViewBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  margin: 8px 0;
`;

export const DotIcon = styled(DotSVG)`
  margin: 10px;
`;

export const ChannelImg = styled.div``;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;
