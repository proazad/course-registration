# React + Vite

<!-- Add at least 3 Project features
Discuss how you managed the state in your assignment project. -->

# Add at least 3 Project features

## Features

1. By Click on Select button Course Added in Cart. Every Course have fixed Credit.

2. You are not able to select already Select same course at a time. You are able to select 1 course for one time. Course duplicate selections resticted.

3. You Can Select Unlimited Course if you have enough credit.Under an account you can use max 20 credit.

# [Discuss how you managed the state in your assignment project].

In the reactJs "State" is more important part. If i want to store changable and re-useable data in reactJS "State" is unbetenable way. Its simplest and efficent way to use for store any type data. It can be STRING, NUMBER, ARRAY, OBJECT type data.

## How i managed State ?

```
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carts from "../Carts/Carts";
import Courses from "../Courses/Courses";
```

```
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
```

`const [data, setData] = useState()`
Its a simple ReactJs State Declaretion. Its a JavaScript destructing technology. Here "Data" is a dectructing variable and setData is function. Which is set data in the useState hook.
In the time of declare state must declare this state is store what type of data.

If i have data for iterable or addable . Simple i declare a state. Using setData Function i set data in this state.

"setDate" is use for store new data in this state.
"data" is use for use data in another place i need this stored data.
