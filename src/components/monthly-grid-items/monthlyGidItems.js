import monthlyListData from "../../DATA/MONTHLY_LIST";
import GridView from "../utils/grid-view/gridView";
import LiftedGridItem from "../utils/lifted-grid-item/liftedGridItem";

const MonthlyGridItems = () => {
  return (
    <GridView height="70vh">
      {monthlyListData.map((item) => (
        <LiftedGridItem
          key={item.id}
          cover={item.url}
          heading={item.heading}
          paragraph={item.paragraph}
          numberOfStars={item.stars}
        />
      ))}
    </GridView>
  );
};

export default MonthlyGridItems;
