import PropTypes from "prop-types";
import credit from "../../assets/credit.svg";
import dollar from "../../assets/dollar.svg";
import image from "../../assets/images/Rectangle 2-1.png";
const Course = ({ course, handleSelectedCourse }) => {
  const { title, price, credits, description } = course;
  return (
    <div className="card p-3 bg-base-100 shadow-xl rounded-md">
      <figure className="">
        <img src={image} alt={title} className="rounded-md " />
      </figure>
      <div className="p-2 space-y-4">
        <div className="h-24">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm font-normal text-gray-600">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <img src={dollar} alt="" />
            <p>Price : {price}</p>
          </div>
          <div className="flex gap-1">
            <img src={credit} alt="" />
            <p>Credit : {credits}hr</p>
          </div>
        </div>
        <div className="card-actions">
          <button
            className="btn btn-info btn-wide"
            onClick={() => handleSelectedCourse(course)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
  handleSelectedCourse: PropTypes.func,
};
export default Course;
