import GridView from "../utils/grid-view/gridView";
import HomeItem from "../utils/home-item/homeItem";
import HomeData from "../../DATA/HOME_DATA";

const HomeItems = ({ marginBottom }) => {
  return (
    <div style={{ marginBottom }}>
      <GridView>
        {HomeData.map((item) => (
          <HomeItem
            key={item.id}
            itemName={item.name}
            imgUrl={item.imgURL}
            path={item.path}
          />
        ))}
      </GridView>
    </div>
  );
};

export default HomeItems;
