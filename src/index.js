import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = () => Math.ceil(Math.random() * 1000);

const Greeting = user => {
  let domElement = (
    <div className="container">
      <h1>Greetings! {user}</h1>
      <h2 className="text-muted">Your lucky number is: {luckyNumber()}</h2>
    </div>
  );
  return domElement;
};

// const user = {
//   name: "Nick",
//   luckyNumber: luckyNumber()
// };

class User {
  constructor(name) {
    this.name = name;
    this.luckyNumber = luckyNumber();
  }
}

ReactDOM.render(
  //   <h1 className="container">React Prototypes!</h1>,
  Greeting(new User("Nick").name),
  document.getElementById("root")
);
