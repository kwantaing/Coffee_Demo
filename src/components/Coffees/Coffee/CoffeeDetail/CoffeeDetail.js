import React from "react"
import Image from "../../../Image/Image"
import Rater from "react-rater"
import "react-rater/lib/react-rater.css"
import classes from './CoffeeDetail.module.css'

const CoffeeDetail = props => {
  const coffee = props.coffee
  return (
    <div className={classes.CoffeeDetail}>
      <h1>{coffee.coffeeName}</h1>
      <Image type={true} imgInfo={coffee.coffeeImage}></Image>
      <h4>Coffee Type: {coffee.coffeeType.coffeeType}</h4>
      <h5>{coffee.coffeeDescription}</h5>
      <h5>
        Rating:
        <Rater rating={coffee.coffeeRating} total={5} />
      </h5>
    </div>
  )
}

export default CoffeeDetail
