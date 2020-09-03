import React from "react"
import Header from "../components/Header/Header"
import CoffeeDetail from '../components/Coffees/Coffee/CoffeeDetail/CoffeeDetail'

const coffeePage = ({ pageContext }) => {
  const { coffee, allData } = pageContext
  return (
    <div>
      <Header allData={allData.nodes}></Header>
      <CoffeeDetail coffee = {coffee}></CoffeeDetail>
    </div>
  )
}

export default coffeePage
