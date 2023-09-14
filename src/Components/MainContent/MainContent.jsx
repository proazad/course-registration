import { useEffect, useState } from "react";
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
      return alert("Already Selected !");
    } else {
      selectedCourse.forEach((item) => {
        TotalCredit += item.credits;
        TotalPrice += item.price;
      });
      if (TotalCredit > 20) {
        return alert("Sorry! Insufficient Credit");
      } else {

        setRemainingCredit(InitialCredit - TotalCredit)
        setCredit(TotalCredit);
        const twoDigit = TotalPrice.toFixed(2);
        setPrice(twoDigit);
      }
      setSelectedCourse([...selectedCourse, course]);
    }
    console.log(remainingCredit);
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
    </div>
  );
};

export default MainContent;
