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

  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData);
  const handleSubmit = () => {
    alert("hello");
  };

  return (
    <>
      <Rectangle />
      <MainContent>
        <ParagraphText>Give Feedback or Contact with Us</ParagraphText>
        <Input
          type={"text"}
          width={"32rem"}
          height={"5rem"}
          value={formData.title}
          onChange={handleChange}
          name={"title"}
          placeholder={"Title ..."}
        />
        <Input
          type={"text"}
          width={"32rem"}
          height={"5rem"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          placeholder={"Email"}
        />
        <TextArea
          placeholder={"Type here ..."}
          name={"message"}
          value={formData.message}
          onChange={handleChange}
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

          <Button
            bg={(props) =>
              props.disabled
                ? props.theme.color.primaryDisabled
                : props.theme.color.primary
            }
            color={(props) => props.theme.color.white}
            onClick={handleSubmit}
            width={"11rem"}
            height={"5rem"}
          >
            Send
          </Button>
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
