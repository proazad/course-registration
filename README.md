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
const MainContent = () => {
    // Here I just declare a simple State , Here i store array type of data
const [courses, setCourses] = useState([]);
// Here i'm use useEffect hook for side effect . By this hooks i fetch data from my local store json data. And at the Last I set this data in the above state.
useEffect(() => {
fetch("data.json")
.then((res) => res.json())
.then((data) => setCourses(data));
}, []);

return (
    //Here Return / Pass my stored `courses` data  in another component, althought it multi step nested
);
};
```

`const [courses, setCourses] = useState([])`
Its a simple ReactJs State Declaretion. Its a JavaScript destructing technology. Here "Data" is a dectructing variable and setData is function. Which is set data in the useState hook.
In the time of declare state must declare this state is store what type of data.

If i have data for iteration or add or substruction . Simply i declare a state. Using `setCourses` Function i set data in this state.

`setCourses` is use for store new data in this state.
`courses` is use for use data in another place i need this stored data.
