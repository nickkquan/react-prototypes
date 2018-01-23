import React from "react";
import Table from "./table";

const students = [
  {
    student: "Hermione Granger",
    course: "Muggle Studies",
    grade: 95
  },
  {
    student: "Harry Potter",
    course: "Defense Against the Dark Arts",
    grade: 95
  },
  {
    student: "Neville Longbottom",
    course: "Herbology",
    grade: 95
  }
];

const App = () => {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students} />
    </div>
  );
};

export default App;
