import React from "react"
import classes from "./Header.module.css"
import Image from "../Image/Image"
import { Link } from "gatsby"

const Header = props => {
  console.log(props.allData)
  return (
    <div className={classes.Header}>
      <Link to="/">
        <img
          className={classes.img}
          src="https://loading.io/s/icon/1cs6ip.svg"
          alt=""
        ></img>
      </Link>
      <ul>
        <li>
          <Link className={classes.Link} to="/">
            Home
          </Link>
        </li>
        <li>
          <div className={classes.Dropdown}>
            Types of Coffee
            <div className={classes.DropdownContent}>
              {props.allData.map(coffeeType => {
                console.log(coffeeType)
                return (
                  <Link
                    key={coffeeType.id}
                    className={classes.TypeLink}
                    to={`/${coffeeType.slug}`}
                  >
                    {coffeeType.coffeeType}
                  </Link>
                )
              })}
            </div>
          </div>
        </li>
        <li>
          <Link className={classes.Link} to="/coffees">
            All Coffees
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
