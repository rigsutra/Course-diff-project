import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ filterData, setCategory }) => {
  function categoryHandler(title) {
    setCategory(title);
  }

  return (
    <div className="filter-data">
      {filterData.map((data) => (
        <button
          className="btn"
          onClick={() => categoryHandler(data.title)}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Filter;
