import React from "react";
import {
  CostomerCareWrapper,
  MainCost,
  ParagraphText,
} from "./customerCareRectangle.styles";
import SettingToggle from "../settings-toggle/settingsToggle";

export const CustomerCareRectangle = () => {
  return (
    <CostomerCareWrapper>
      <MainCost>
        <SettingToggle />
        <ParagraphText>Give Feedback or Contact with Us</ParagraphText>
      </MainCost>
    </CostomerCareWrapper>
  );
};

export default CustomerCareRectangle;
