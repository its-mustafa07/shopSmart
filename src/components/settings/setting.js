import SettingData from "../../DATA/SEETINGS-DATA";
import {
  Heading,
  Paragraph,
  ShopSmartWrap,
  MainWrapper,
  UserInfOWrapper,
} from "./setting.styles";
import ShopSmart from "../utils/shop-smart-logo/shopSmartLogo";
import UserInfo from "../utils/user-info/userInfo";
import { Link } from "react-router-dom";

const Setting = ({ showSetting }) => {
  return (
    <MainWrapper showSetting={showSetting}>
      <ShopSmartWrap>
        <ShopSmart />
      </ShopSmartWrap>
      <UserInfOWrapper>
        <UserInfo />
      </UserInfOWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {SettingData.map((item) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Heading>{item.heading}</Heading>
            {item.options.map((option) => (
              <Link style={{ textDecoration: "none" }}>
                <Paragraph>{option}</Paragraph>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </MainWrapper>
  );
};

export default Setting;
