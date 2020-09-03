import React from "react"
import { useStaticQuery } from "gatsby"
import CoffeeCard from "./Coffee/CoffeeCard/CoffeeCard"

const AllCoffeesGrid = props => {
  const data = useStaticQuery(graphql`
    query allCoffeees {
      allContentfulCoffee {
        nodes {
          id
          coffeeName
          slug
          coffeeDescription
          coffeeImage {
            fixed {
              src
            }
            fluid {
              src
            }
          }
          coffeeRating
          coffeeType {
            coffeeType
            slug
          }
        }
      }
    }
  `)
  console.log(data.allContentfulCoffee)
  const style = {
      marginTop: "3%",
  }
  return (
    <div style={style}>
      {data.allContentfulCoffee.nodes.map(coffee => (
        <CoffeeCard
          coffeeType={coffee.coffeeType.slug}
          coffee={coffee}
        ></CoffeeCard>
      ))}
    </div>
  )
}

export default AllCoffeesGrid
