import Carts from "../Carts/Carts";
import Courses from "../Courses/Courses";
const MainContent = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="container mx-auto py-16 gap-5 flex flex-col lg:flex-row px-2 lg:px-0">
        <Courses></Courses>
        <Carts></Carts>
      </div>
    </div>
  );
};

export default MainContent;
