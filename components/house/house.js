import Link from "next/link";
import { BadgeTitle, IMAGE_PLACEHOLDER_URL } from "../../constants";
import { formatterGBP } from "../../utils";

const House = ({ house, parentClass = "" }) => {
  const { title, address, type, price, id } = house;

  let badge = null;

  switch (type) {
    case BadgeTitle.INDEPENDENT_LIVING:
      badge = (
        <div className="house__badge house__badge--teal">
          <span>Independent living</span>
        </div>
      );
      break;
    case BadgeTitle.SUPPORT_AVAILABLE:
      badge = (
        <div className="house__badge house__badge--orange">
          <span>Restaurant & Support available</span>
        </div>
      );
      break;
  }

  return (
    <Link href={`/details/[id]`} as={`/details/${id}`}>
      <a className={`house ${parentClass}`}>
        <div className="house__image-wrapper">
          <img
            className="house__image"
            src={IMAGE_PLACEHOLDER_URL}
            alt={`${title} - ${address}`}
          />
          {badge}
        </div>
        <div className="house__info">
          <h2 className="house__title">{title}</h2>
          <p className="house__address">{address}</p>
          <p className="house__offer">
            New Properties for Sale from <b>{formatterGBP.format(price)}</b>
          </p>
          <p className="house__description">Shared Ownership Available</p>
        </div>
      </a>
    </Link>
  );
};

export default House;
