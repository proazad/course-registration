import PropTypes from "prop-types";
import Course from "../Course/Course";
const Courses = ({ courses, handleSelectedCourse }) => {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <Course key={course.id} course={course} handleSelectedCourse={handleSelectedCourse}></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  courses: PropTypes.array,
  handleSelectedCourse: PropTypes.func,
  
};
export default Courses;
