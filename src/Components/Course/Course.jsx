import credit from "../../assets/credit.svg";
import dollar from "../../assets/dollar.svg";
import image from "../../assets/images/Rectangle 2-1.png";
const Course = () => {
  return (
    <div className="card p-3 bg-base-100 shadow-xl rounded-md">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-md " />
      </figure>
      <div className="p-2 space-y-4">
        <h2 className="text-lg font-semibold">Introduction to C++ for DSA</h2>
        <p className="text-sm font-normal text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <img src={dollar} alt="" />
            <p>Price : 25000</p>
          </div>
          <div className="flex gap-1">
            <img src={credit} alt="" />
            <p>Credit : 10hr</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-info btn-wide">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
