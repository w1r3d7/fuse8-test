import House from "../house";

const HouseList = ({ houses, parentClass = "" }) => {
  if (houses.length === 0) {
    return <h2>No results, please, change your search string.</h2>;
  }

  return (
    <div className={`house-list ${parentClass}`}>
      {houses.map((house) => {
        return (
          <House key={house.id} house={house} parentClass="house-list__house" />
        );
      })}
    </div>
  );
};

export default HouseList;
