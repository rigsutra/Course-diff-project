/* eslint-disable react/prop-types */
import Card from "./Card";
import "./Allcards.css";
import { useState } from "react";

const AllCards = (props) => {
  const course = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    let allCourses = [];

    if (category === "All") {
      // Check if course is defined and is an object
      if (course && typeof course === "object") {
        Object.values(course).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            allCourses.push(course);
          });
        });
      }

      return allCourses;
    } else {
      return course[category];
    }
  };

  return (
    <div className="AllCards">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          course={course}
        />
      ))}
    </div>
  );
};

export default AllCards;
