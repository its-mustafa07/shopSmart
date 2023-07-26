import SettingData from "../../DATA/SEETINGS-DATA";
import {
  Heading,
  Paragraph,
  ShopSmartWrap,
  MainWrapper,
} from "./setting.styles";
import ShopSmart from "../utils/shop-smart-logo/shopSmartLogo";

const Setting = ({ showSetting }) => {
  return (
    <MainWrapper showSetting={showSetting}>
      <ShopSmartWrap>
        <ShopSmart />
      </ShopSmartWrap>
      {SettingData.map((item) => (
        <>
          <Heading>{item.heading}</Heading>
          <Paragraph>{item.paragraph}</Paragraph>
        </>
      ))}
    </MainWrapper>
  );
};

export default Setting;
