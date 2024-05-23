/* eslint-disable react/prop-types */
import "./Cards.css"
import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  return (
    <div className="card-container">
      <div className="image-data">
        <img height={200} width={300} src={course.image.url} />
        <div className="btn-class">
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div className="info">
        <p className="title">{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
