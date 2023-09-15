import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
const Carts = ({ selectedCourse, credit, price, remainingCredit }) => {
    let index = 1;
  return (
    <div className="w-full lg:w-[300px]">
      <div className="bg-base-100 shadow-xl p-4 rounded-md">
        <div className="border-b-2">
          <h3 className="text-blue-600 font-semibold text-lg pb-3">
            Credit Hour Remaining : {remainingCredit} hr
          </h3>
        </div>
        <div className="border-b-2 my-5 pb-4">
          <h3 className="text-xl font-bold mb-5">Course Name</h3>
          {selectedCourse.map((course, idx) => <Cart key={idx} index={index++} course={course}></Cart> )}
        </div>
        <div className="border-b-2 my-5 pb-4">
          <p className="text-base font-medium text-gray-600">
            Total Credit Hour: {credit}
          </p>
        </div>
        <div className="my-5 ">
          <p className="text-base font-medium text-gray-600">
            Total Price: {price} USD
          </p>
        </div>
      </div>
    </div>
  );
};
Carts.propTypes = {
  selectedCourse: PropTypes.array,
  credit: PropTypes.number,
  price: PropTypes.number,
  remainingCredit: PropTypes.number,
};
export default Carts;