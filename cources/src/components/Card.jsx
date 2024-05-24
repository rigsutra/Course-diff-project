/* eslint-disable react/prop-types */
import "./Cards.css"
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let  likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const description = `${props.course.description.substring(0,200)}...`

  function Clickhandler(){
    if(likedCourses.includes(course.id)){
      // pahle se liked hai so usse hatana hai
      setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id)));
      toast.warning("like Removed");
    }else{
      //pahle se liked nahi hai
      //insert the courses into liked courses
      if(likedCourses.lenght === 0){
        setLikedCourses([course.id]);
      }else{
        //non-empty hai pahle se
        setLikedCourses((prev) => [...prev , course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="card-container">
      <div className="image-data">
        <img height={200} width={300} src={course.image.url} />
        <div className="btn-class">
          <button onClick={Clickhandler}>
            { likedCourses.includes(course.id) ?  (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)}
          </button>
        </div>
      </div>
      <div className="info">
        <p className="title">{course.title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
