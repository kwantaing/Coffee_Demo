import React from "react"
import classes from "./CoffeeType.module.css"
import Coffee from "../../Coffees/Coffee/CoffeeCard/CoffeeCard"
import Image from "../../Image/Image"

const CoffeeType = props => {
  const coffeeType = props.coffeeType
  console.log(props.slug)
  return (
    <div className={classes.CoffeeType}>
      <h1>{coffeeType.coffeeType}</h1>
      <Image type={true} imgInfo={coffeeType.coffeeTypeImg}></Image>
      <p>{coffeeType.typeDescription}</p>
      <ul>
        Components :{" "}
        {coffeeType.coffeeComponents.map(component => (
          <li key={`${component}--`}className={classes.coffeeComponents}>{component} </li>
        ))}
      </ul>
      <h3>{coffeeType.coffeeType} Coffee Drinks here:</h3>
      {coffeeType.coffeeTypeOfferings.map(coffee => {
        return (
          <Coffee
            key={coffee.id}
            coffeeType={props.slug}
            coffee={coffee}
          ></Coffee>
        )
      })}
    </div>
  )
}

export default CoffeeType
