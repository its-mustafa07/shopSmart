import React, { useState } from "react";
import Rectangle from "../components/utils/rectangle/rectangle";
import Button from "../components/utils/button/button";
import Navigation from "../components/utils/navigation/navigation";
import TextArea from "../components/utils/text-area/textArea";
import Input from "../components/utils/input/input";
import {
  Buttons,
  MainContent,
  ParagraphText,
  TextPara,
} from "./styles/customerContact.styles";
import { useNavigate } from "react-router-dom";

const CustomerContact = () => {
  const navigate = useNavigate();
  // const [textareaChange, setTextareaChange] = useState({
  //   title: "",
  //   email: "",
  //   message: "",
  // });

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTextareaChange((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));

  //   setTextareaChange("");
  // };

  const handleSubmit = () => {
    alert("hello");
    // setTextareaChange("");
  };

  // const { title, email, message } = textareaChange;

  // const isSubmitButtonDisabled =
  //   !textareaChange.title || !textareaChange.email || !textareaChange.message;

  return (
    <>
      <Rectangle />
      <MainContent>
        <ParagraphText>Give Feedback or Contact with Us</ParagraphText>
        <Input
          type={"text"}
          width={"32rem"}
          height={"5rem"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name={"title"}
          placeholder={"Title ..."}
        />
        <Input
          type={"text"}
          width={"32rem"}
          height={"5rem"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email"}
        />
        <TextArea
          placeholder={"Type here ..."}
          name={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Buttons>
          <Button
            onClick={() => navigate(-1)}
            activeColor
            color={(props) => props.theme.color.black}
            bg={(props) => props.theme.color.secondarys}
            width={"11rem"}
            height={"5rem"}
          >
            Cancel
          </Button>

          {/* <Button
            bg={(props) =>
              props.disabled
                ? props.theme.color.primaryDisabled
                : props.theme.color.primary
            }
            color={(props) => props.theme.color.white}
            disabled={!title && !email && !message}
            onClick={handleSubmit}
            width={"11rem"}
            height={"5rem"}
          >
            Send
          </Button> */}
          {title && email && message ? (
            <button type="button">Button</button>
          ) : (
            <button type="button" disabled>
              Button
            </button>
          )}
        </Buttons>
        <TextPara>
          <p>HelpLine</p>
          <p>051 - 5467891</p>
        </TextPara>
      </MainContent>
      <Navigation />
    </>
  );
};

export default CustomerContact;
