import React, { useState } from "react";
import {
  ProfileContainer,
  ProfileBox,
  ProfileImage,
  VideoContaianer,
  ImgIllustration,
  VideoBox,
  UploadBtn,
} from "../../styles/Profile.styles";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import Menu from "../Menu/Menu";
import Tabs from "../Tabs/Tabs";
import { TabPane } from "../Tabs/TabTitile";
import styled from "styled-components";
import VideoIllustration from "../Assets/video.png";
import Coming_Soon from "./Coming_Soon";
import Modal from "../Modal/Modal";
import {
  ModalTitle,
  TitleContainer,
  UploadBox,
  UploadIconContainer,
} from "../../styles/Modal.styles";
import UploadSVG from "../SVG/Upload";
import Comment_LG from "../Comments/Comment_LG";
import Loader from "../Loader/Loader";

const Container = styled.div`
  position: absolute;
  left: 55px;
  width: calc(100% - 55px);
`;

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <Menu />
      <Container>
        <ProfileContainer>
          <CircleAvatar height={100} width={100} radius={100}>
            <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>
          <ProfileBox>
            <h2>Eze Nnaemeka</h2>
            <p>0 subscribers</p>
          </ProfileBox>
        </ProfileContainer>
        <Tabs>
        <TabPane title="HOME">
            <VideoContaianer>
              <VideoBox>
                <div>
                  <Coming_Soon width={300} />
                </div>
              </VideoBox>
            </VideoContaianer>
          </TabPane>

          <TabPane title="VIDEOS">
            <VideoContaianer>
              <VideoBox>
                <div>
                  <ImgIllustration src={VideoIllustration} />
                </div>
                <div>
                  <h2>Upload a video to get started</h2>
                  <p>Start sharing your story and connecting with viewers.</p>
                </div>
                <UploadBtn onClick={() => setShowModal(true)}>
                  Upload Video
                </UploadBtn>
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                     <TitleContainer>
                      <ModalTitle>Upload video</ModalTitle>{" "}
                      <span onClick={() => setShowModal(false)}>X</span>
                    </TitleContainer>

                    <UploadBox>
                      <UploadIconContainer>
                        <UploadSVG width="48px" height="48px" />
                      </UploadIconContainer>
                      <div style={{ margin: "10px 0", textAlign: "center" }}>
                        <p>Drag and drop video files to upload</p>
                        <p>
                          Your videos will be private until you publish them.
                        </p>
                      </div>
                      <UploadBtn>Select Files</UploadBtn>
                    </UploadBox> 

                    {/* <Comment_LG/> */}
                  </Modal>
                )}
              </VideoBox>
            </VideoContaianer>
          </TabPane>

          <TabPane title="ABOUT">
            <VideoContaianer>
              <VideoBox>
                <div>
                  <Coming_Soon width={300} />
                </div>
              </VideoBox>
            </VideoContaianer>
          </TabPane>



          <TabPane title="CHANNELS">
            <VideoContaianer>
              <VideoBox>
                <div>
                  <Coming_Soon width={300} />
                </div>
              </VideoBox>
            </VideoContaianer>
          </TabPane>
        </Tabs>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
