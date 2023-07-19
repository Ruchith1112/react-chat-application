import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import {
  ParentFooter,
  FooterForm,
  ChatInput,
  EmojiPickerContainer,
  EmojiButton,
  NameSuggestions,
  NameSuggestionItem,
} from "./Footer.Styled";

const Footer = ({ onMessageSend }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const [showNameSuggestions, setShowNameSuggestions] = useState(false);
  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [inputCursorPosition, setInputCursorPosition] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setMessage(value);

    if (value.includes("@")) {
      const cursorPosition = event.target.selectionStart;
      setInputCursorPosition(cursorPosition);
      setShowNameSuggestions(true);
      const suggestions = ["Alan", "Bob", "Carol", "Dean", "Elin"];
      setNameSuggestions(suggestions);
    } else {
      setShowNameSuggestions(false);
      setNameSuggestions([]);
    }

    if (value.match(/@\S+\s/)) {
      setShowNameSuggestions(false);
      setNameSuggestions([]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      onMessageSend(message);
      setMessage("");
      setSelectedName("");
    }
  };

  const handleEmojiClick = (event) => {
    event.stopPropagation();
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setMessage(message + emoji);
  };

 
  const handleNameSelect = (name) => {
    const updatedMessage = message.slice(0, inputCursorPosition) + name + " " + message.slice(inputCursorPosition);
    setMessage(updatedMessage);
    setSelectedName(name);
    setShowNameSuggestions(false);
    setInputCursorPosition(updatedMessage.length); 
  };
  
  const handleOutsideClick = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <ParentFooter>
      <FooterForm onSubmit={handleFormSubmit}>
        <ChatInput
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        {showNameSuggestions && (
          <NameSuggestions top={-30} left={inputCursorPosition * 8}>
            {nameSuggestions.map((name) => (
              <NameSuggestionItem
                key={name}
                selected={name === selectedName}
                onClick={() => handleNameSelect(name)}
              >
                {name}
              </NameSuggestionItem>
            ))}
          </NameSuggestions>
        )}
        <div style={{ position: "relative" }}>
          {showEmojiPicker && (
            <EmojiPickerContainer ref={emojiPickerRef}>
              <EmojiPicker onEmojiClick={handleEmojiSelect} />
            </EmojiPickerContainer>
          )}
          <EmojiButton type="button" onClick={handleEmojiClick}>
            &#128512;
          </EmojiButton>
        </div>
      </FooterForm>
    </ParentFooter>
  );
};

export default Footer;
