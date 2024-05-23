import Card from "./Card";
import "./Allcards.css"

// eslint-disable-next-line react/prop-types
const AllCards = ({ courses }) => {
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCatogary) => {
      courseCatogary.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div className="AllCards">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default AllCards;
