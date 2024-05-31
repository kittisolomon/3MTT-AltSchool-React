import { React, useState } from "react";


const Events = () => {

// state
const [counter, setCounter] = useState(0);

const handleIncrement = (event) => {
  event.preventDefault();
  setCounter((prev) => prev + 1);
};

const handleDecrement = (event) => {
  event.preventDefault();
  setCounter((prev) => prev - 1);
};

 return <section className="counter-counter">
  
   <h3> React onClick Event </h3>
   <button className="action-btn" onClick={handleIncrement}>
    Increment
   </button>
    <button className="action-btn" onClick={handleDecrement}>
    Decrement
   </button>
   <div className="counter-label">
     {counter}
   </div>
  </section>


}


export default Events;