import Course from "../Course/Course";

const Courses = () => {
    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
    );
};

export default Courses;