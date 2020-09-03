import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CoffeeTypes from "../components/CoffeeTypes/CoffeeTypes"
import Header from "../components/Header/Header"
import classes from "./App.module.css"

const App = () => {
  const data = useStaticQuery(graphql`
    query initialQuery {
      allContentfulCoffeeTypes {
        nodes {
          id
          coffeeType
          typeDescription
          coffeeComponents
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
          slug
        }
      }
    }
  `)
  const { nodes: allData } = data.allContentfulCoffeeTypes
  console.log(allData)
  return (
    <div>
      <Header allData={allData}></Header>
      <CoffeeTypes></CoffeeTypes>
    </div>
  )
}

export default App
