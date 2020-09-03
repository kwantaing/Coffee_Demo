import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CoffeeType from "./CoffeeType/CoffeeType"

const CoffeeTypes = () => {
  const data = useStaticQuery(graphql`
    query CoffeeTypeQuery {
      allContentfulCoffeeTypes {
        nodes {
          id
          coffeeType
          typeDescription
          coffeeComponents
          slug
          coffeeTypeImg {
            id
            fluid(maxWidth: 614) {
              src
            }
          }
          coffeeTypeOfferings {
            id
            coffeeName
            coffeeDescription
            slug
            coffeeRating
            coffeeType {
              coffeeType
            }
            coffeeImage {
              id
              fluid(maxWidth: 614) {
                src
              }
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulCoffeeTypes)
  return (
    <div>
      {data.allContentfulCoffeeTypes.nodes.map(coffeeType => {
        return (
          <CoffeeType
            key={coffeeType.id}
            slug={coffeeType.slug}
            coffeeType={coffeeType}
          ></CoffeeType>
        )
      })}
    </div>
  )
}
export default CoffeeTypes
