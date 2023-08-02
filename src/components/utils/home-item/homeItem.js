import { useNavigate } from "react-router-dom";
import { ImageWrapper, ItemWrapper, ItemName } from "./homeItem.styles";

const HomeItem = ({ itemName, imgUrl, path }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper onClick={() => navigate(`/${path}`)}>
      <ItemName>{itemName}</ItemName>
      <ImageWrapper
        imgUrl={imgUrl}
        // style={{
        //   height: "15rem",
        //   width: "15rem",
        // }}
      />
    </ItemWrapper>
  );
};

export default HomeItem;
