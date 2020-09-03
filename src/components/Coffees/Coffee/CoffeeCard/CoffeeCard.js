import React from "react"
import { Link } from "gatsby"
import classes from "./CoffeeCard.module.css"
import Image from "../../../Image/Image"
import { Button } from "@material-ui/core"

const CoffeeCard = (props) => {
  console.log(props.coffee)
  return (
    <div className={classes.Coffee}>
      <h5>{props.coffee.coffeeName}</h5>
      <Image type={false} imgInfo={props.coffee.coffeeImage}></Image>
      <p>{props.coffee.coffeeDescription}</p>
      <Button variant="contained">
        <Link to={`/${props.coffeeType}/${props.coffee.slug}`}>More Info</Link>
      </Button>
    </div>
  )
}

export default CoffeeCard
