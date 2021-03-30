export default function SearchMoreButton({ parentClass = "" }) {
  return (
    <button type="button" className={`search-more-button ${parentClass}`}>
      See more
    </button>
  );
}
