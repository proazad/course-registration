import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carts from "../Carts/Carts";
import Courses from "../Courses/Courses";
const MainContent = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelectedCourse = (course) => {
    let TotalCredit = course.credits;
    let TotalPrice = course.price;
    const InitialCredit = 20;

    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      return toast.error("🦄 Sorry! this Course is already Selected", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {

      selectedCourse.forEach((item) => {
        TotalCredit += item.credits;
        TotalPrice += item.price;
      });

      if (TotalCredit > 20) {
        return toast.error("🦄 Sorry! You have not enough credits", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      } else {
        setRemainingCredit(InitialCredit - TotalCredit);
        setCredit(TotalCredit);

        const twoDigit = TotalPrice.toFixed(2);
        setPrice(twoDigit);
      }
      
      setSelectedCourse([...selectedCourse, course]);
    }
  };

  return (
    <div className="bg-[#F3F3F3]">
      <div className="container mx-auto py-16 gap-5 flex flex-col lg:flex-row px-2 lg:px-0">
        <Courses
          courses={courses}
          handleSelectedCourse={handleSelectedCourse}
        ></Courses>
        <Carts
          selectedCourse={selectedCourse}
          credit={credit}
          price={price}
          remainingCredit={remainingCredit}
        ></Carts>
      </div>
      {<ToastContainer />}
    </div>
  );
};

export default MainContent;
