import { React } from "react";

function Car({ data }) {
// const {brand, color, year} = data;
  //console.log(data);
  return <div className="car">{ `${data.color} ${data.brand}, ${data.year}` }</div>;
}

const ReactProps = () => {
    const cars = [{
        brand: "Tesla",
        color: "Gold",
        year: 2022
    },
    {
        brand: "Mercedes",
        color: "Black",
        year: 2018
    },
    {
        brand: "Toyota",
        color: "Green",
        year: 2024
    }]

    const listOfCars = cars.map((car, index) => {
        return <Car key={index}  data={car} />;
    })
  return (
    <section className="main-page">
      <h1>React Props </h1>
      {listOfCars}
    </section>
  );
};

export default ReactProps;
