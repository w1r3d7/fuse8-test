const House = ({ house }) => {
  const { title, address, type, price } = house;
  return (
    <div>
      <img src="https://via.placeholder.com/300x150/FF0000/FFFFFF?text=title" alt={`${title} - ${address}`} />
    </div>
  )
}

export default House;