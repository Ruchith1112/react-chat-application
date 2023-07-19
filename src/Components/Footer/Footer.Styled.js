// import  styled  from "styled-components";

// export const ParentFooter=styled.div`
// width:100%;
// background: #e7eaf1;
// `
// export const FooterForm=styled.form`
// display:flex;
// align-items:center;
// padding:10px 30px;
// `
// export const ChatInput=styled.input`
// width:100%;
// outline:none;
// border-radius:30px;
// padding-left:10px;
// height:45px;
// background: #e7eaf1;
// border:2px solid gray;
// `
// export const EmojiPickerContainer = styled.div`
//   position: absolute;
//   bottom: calc(100% + 10px);
//   right: 0;
// `;

// export const EmojiButton = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// export const NameSuggestions = styled.ul`
//   position: absolute;
//   top: ${(props) => props.top}px;
//   left: ${(props) => props.left}px;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   background-color: white;
//   border: 1px solid #ccc;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

// // Styled component for each name suggestion item
// export const NameSuggestionItem = styled.li`
//   padding: 8px;
//   cursor: pointer;
//   background-color: ${(props) => (props.selected ? "lightblue" : "white")};

//   &:hover {
//     background-color: lightgray;
//   }
// `;


import styled from "styled-components";

export const ParentFooter = styled.div`
  width: 100%;
  background: #e7eaf1;
`;

export const FooterForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  position: relative; /* Added */
`;

export const ChatInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 30px;
  padding-left: 10px;
  height: 45px;
  background: #e7eaf1;
  border: 2px solid gray;
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
`;

export const EmojiButton = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NameSuggestions = styled.ul`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0; 
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%; 
`;

export const NameSuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "lightblue" : "white")};

  &:hover {
    background-color: lightgray;
  }
`;
