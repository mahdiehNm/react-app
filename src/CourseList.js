import React from "react";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const Courses = [
    { name: "React", id: 1, description: "This is React course" },
    { name: "JavaScript", id: 2, description: "This is JavaScript course" },
    { name: "Node", id: 3, description: "This is Node course" },
    { name: "Next", id: 4, description: "This is Next course" },
  ];

  return (
    <div>
      <h3>Course list</h3>
      <ul>
        {Courses.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
