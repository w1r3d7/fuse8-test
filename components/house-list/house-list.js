import House from "../house";

const HouseList = ({ houses }) => {
  if (houses.length === 0) {
    return <h2>No results, please, change your search string.</h2>;
  }

  return (
    <div className="house-list">
      {houses.map((house) => {
        return <House key={house.id} house={house} />;
      })}
    </div>
  );
};

export default HouseList;
