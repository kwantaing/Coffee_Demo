import React from "react"
import Header from "../components/Header/Header"
import CoffeeType from '../components/CoffeeTypes/CoffeeType/CoffeeType'

const TypeDetail = ({ pageContext }) => {
  const { coffeeType, allData } = pageContext
  console.log(coffeeType)
  return (
    <div>
      <Header allData={allData.nodes}></Header>
      <CoffeeType slug={coffeeType.slug} coffeeType={coffeeType}></CoffeeType>
    </div>
  )
}

export default TypeDetail
