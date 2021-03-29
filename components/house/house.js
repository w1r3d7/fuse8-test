import Link from 'next/link';
import {IMAGE_PLACEHOLDER_URL} from '../../constants';
import {formatterGBP} from '../../utils';

const House = ({ house }) => {
  const { title, address, type, price, id } = house;

  return (
    <Link href={`details/${id}`}>
      <a className="house">
        <div className="house__image-wrapper">
          <img
            className="house__image"
            src={IMAGE_PLACEHOLDER_URL}
            alt={`${title} - ${address}`} />
        </div>
        <div className="house__info">
          <h3 className="house__title">{title}</h3>
          <p className="house__address">{address}</p>
          <p className="house__offer">New Properties for Sale from <b>{ formatterGBP.format(price) }</b></p>
          <p className="house__description">Shared Ownership Available</p>
        </div>
      </a>
    </Link>
  )
}

export default House;