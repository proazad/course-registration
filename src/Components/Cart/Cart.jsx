import PropTypes from "prop-types";
const Cart = ({course, index}) => {
    const {title}= course;
   
  return (
    <p className="text-base font-normal text-gray-600">
      {index}. <span>{title}</span>
    </p>
  );
};
Cart.propTypes = {
    course: PropTypes.object,
    index: PropTypes.number,
    
  };
export default Cart;
