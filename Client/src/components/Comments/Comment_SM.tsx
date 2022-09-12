import React, { Dispatch, SetStateAction, useState } from "react";
import {
  CommentContainer,
  CommentBox,
  CommentWrapper,
  CommentImage,
  CommentDetails,
  CommentName,
  CommentTime,
  Comment,
  ActionContainer,
  IconBox,
  LikeLength,
  ReplyField,
  ReplyFieldContainer,
  CancelButton,
  ReplyFieldBox,
  ButtonContainer,
} from "../../styles/Comment_LG.styles";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import Modal from "../Modal/Modal";
import DislikeSVG from "../SVG/Dislike";
import LikeSVG from "../SVG/Like";

interface Comment_SM_Props  {
onClose : Dispatch<SetStateAction<boolean>>
}


const Comment_SM = ({onClose}:Comment_SM_Props) => {
  const [showField, setShowField] = useState<boolean>(false);
  
  const closeModal = () => {
    onClose(false)
   document.body.style.overflow ="auto" //start scrolling when modal is close
 
  }
  
  return (
    <Modal onClose = {closeModal} screen ="sm"  >

      <CommentContainer screen ="sm">
      <CommentWrapper>
        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                  />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
             <ReplyFieldBox>
                 <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                    />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
              <ButtonContainer>

                <CancelButton radius={5} onClick={()=>{setShowField(false)}}> Cancel</CancelButton>
              </ButtonContainer>
             </ReplyFieldBox>
            )}
          </CommentDetails>
        </CommentBox>







   
        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>





   
        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>





   
        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>






        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>







        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>





        <CommentBox>
          <CircleAvatar width={50} height={50} radius={50}>
            <CommentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU" />
          </CircleAvatar>

          <CommentDetails>
            <CommentName>Daniel Rocha</CommentName>
            <CommentTime>1 year ago</CommentTime>

            <Comment>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, dolores mollitia! Voluptate ea eligendi aperiam totam,
              molestias ad iusto fugiat? Dolorum adipisci eos modi. Ipsam harum
              impedit sapiente quas consequuntur.
            </Comment>
            <ActionContainer>
              <IconBox>
                <LikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />{" "}
                <LikeLength>3</LikeLength>
              </IconBox>
              <IconBox style={{ marginLeft: "12px" }}>
                <DislikeSVG
                  width="15"
                  height="15"
                  stroke="#9556cc"
                  fill="#9556cc"
                />
              </IconBox>

              <IconBox style={{ marginLeft: "12px" }}>
                <CommentTime onClick={() => setShowField(true)}>
                  REPLY
                </CommentTime>
              </IconBox>
            </ActionContainer>

            {showField && (
              <ReplyFieldContainer>
                <CircleAvatar width={30} height={30} radius={50}>
                  <CommentImage
                    style={{ width: "30px", height: "30px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-78os6Hl3Xhz6UBCxP7IV0qW7do9_gmM5_w&usqp=CAU"
                  />
                </CircleAvatar>
                <ReplyField placeholder="reply" />
              </ReplyFieldContainer>
            )}
          </CommentDetails>
        </CommentBox>
      </CommentWrapper>
    </CommentContainer>
    </Modal>

  );
};

export default Comment_SM;
