import House from '../house';

const HouseList = ({houses}) => {
  return (
    <div className="house-list">
      {
        houses.map((house) => {
          return <House key={house.id} house={house} />
        })
      }
    </div>

  )
}

export default HouseList;