import styled from "styled-components";

export const ChatAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background: #e7eaf1;

`;

export const MessageThread = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  &::-webkit-scrollbar {
    width: 5px;
  }

 &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 3px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  padding: 0px 40px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInitials = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding:5px;
  color:white;
`;

export const Username = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color:gray;
  font-size: 18px;
`;

export const MessageTime = styled.span`
  margin-left: 10px;
  font-size: 0.8em;
  color: gray;
`;

export const MessageContentContainer = styled.div`
  display: flex;
 
`;

export const MessageContent = styled.div`
background: white;
    padding: 10px;
    margin-left: 50px;
  margin-top: 5px;
  border-radius: 0px 15px 15px 15px;
`;

export const LikeButton = styled.div`
  margin-top: 5px;
  align-self: flex-end;
  cursor:pointer;
`;
