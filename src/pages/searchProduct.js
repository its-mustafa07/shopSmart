import Rectangle from "../components/utils/rectangle/rectangle";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import QRcode from "../components/utils/qr-code/qrCode";
import SearchInput from "../components/utils/search-input/searchInput";
import ListItem from "../components/utils/list-Item/listItem";
import SearchProductData from "../DATA/SEARCH_PRODUCT_DATA";
import ListView from "../components/utils/list-view/listView";
import Navigation from "../components/utils/navigation/navigation";
import { useState } from "react";
import { QRcodeWrappr, SearchInputWrappr } from "./styles/searchProduct.styles";
import Button from "../components/utils/button/button";

const SearchProduct = () => {
  const [fill, setFill] = useState([]);

  const handleClick = (itemId) => {
    if (fill.includes(itemId)) {
      setFill(fill.filter((id) => id !== itemId));
    } else {
      setFill([...fill, itemId]);
    }
  };

  return (
    <>
      <Rectangle marginBottom="5.3rem" />
      <ShopSmartHeading marginBottom="1.3rem" />
      <QRcodeWrappr>
        <QRcode marginBottom="1.3rem" />
      </QRcodeWrappr>
      <SearchInputWrappr>
        <SearchInput placeholder="Add List" marginBottom="4.4rem" />
        <Button
          height="3.7rem"
          width="5rem"
          fontWeight="500"
          color="white"
          fontSize="14px"
          borderRadius="0.5rem"
          bg={(props) => props.theme.color.primary}
        >
          Add
        </Button>
      </SearchInputWrappr>
      <ListView height="30vh">
        {SearchProductData.map((data) => (
          <ListItem
            key={data.id}
            handleClick={() => handleClick(data.id)}
            heading={data.ItemHeading}
            paragraph={data.ItemParagraph}
            cover={data.ItemImg}
            svgIcon={
              fill.includes(data.id)
                ? data.ItemWishlishFill
                : data.ItemWhishlist
            }
            numberOfStars={data.itemStar}
          />
        ))}
      </ListView>

      <Navigation />
    </>
  );
};

export default SearchProduct;
