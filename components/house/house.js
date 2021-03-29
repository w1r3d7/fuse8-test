import Link from 'next/link';
import {IMAGE_PLACEHOLDER_URL} from '../../constants';

const House = ({ house }) => {
  const { title, address, type, price, id } = house;
  return (
    <Link href={`details/${id}`}>
      <a className="house">
          <img
            src={IMAGE_PLACEHOLDER_URL}
            alt={`${title} - ${address}`} />
            <h3>{title}</h3>
          <p>{address}</p>
          <p>New Properties for Sale from <b>£{price}</b></p>
      </a>
    </Link>
  )
}

export default House;