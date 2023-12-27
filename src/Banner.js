import React from "react";

function Banner(props) {
    //distructure
  const { title, descrption, numOFStudents } = props;
  return (
    <div>
      <hr />
      <h1>{title}</h1>
      <p>{descrption}</p>
      <span>{numOFStudents} students</span>
      <hr />
    </div>
  );
}

export default Banner;
