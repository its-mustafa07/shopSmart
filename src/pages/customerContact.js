import React, { useState } from "react";
import CustomerCareRectangle from "../components/utils/customer-care-rectange/customerCareRactangle";
import Button from "../components/utils/button/button";
import Navigation from "../components/utils/navigation/navigation";
import TextArea from "../components/utils/text-area/textArea";
import {
  Buttons,
  MainContent,
  TextPara,
} from "./styles/customerContact.styles";
import { useNavigate } from "react-router-dom";

const CustomerContact = () => {
  const navigate = useNavigate();
  const [textareaChange, setTextareaChange] = useState("");

  const handleTextarea = (e) => {
    setTextareaChange(e.target.value);
  };

  const handleSubmit = () => {
    alert("hello");
    setTextareaChange("");
  };
  return (
    <>
      <CustomerCareRectangle />
      <MainContent>
        <TextArea
          placeholder={"Type here ..."}
          value={textareaChange}
          onChange={handleTextarea}
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
            disabled={!textareaChange}
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
