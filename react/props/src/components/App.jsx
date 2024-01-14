import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import Contact from "../contacts";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Heading />
      <Card
        name={Contact[0].name}
        img={Contact[0].imgURL}
        phno={Contact[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={Contact[1].name}
        img={Contact[1].imgURL}
        phno={Contact[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={Contact[2].name}
        img={Contact[2].imgURL}
        phno={Contact[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
