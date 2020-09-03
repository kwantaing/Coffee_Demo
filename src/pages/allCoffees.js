import React from "react"
import Header from "../components/Header/Header"
import AllCoffeesGrid from "../components/Coffees/AllCoffeesGrid"

const allCoffees = ({ pageContext }) => {
    const style = {
        marginTop: "3%",
    }
  return (
    <React.Fragment>
      <Header allData={pageContext.allData.nodes} />
      <AllCoffeesGrid/>
    </React.Fragment>
  )
}

export default allCoffees
