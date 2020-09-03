const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query Query {
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
            coffeeType{
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
  const coffeeType = path.resolve(`./src/pages/TypeDetail.js`)
  const coffeePage = path.resolve(`./src/pages/coffeePage.js`)
  queryResults.data.allContentfulCoffeeTypes.nodes.forEach(node => {
    //each coffee type
    createPage({
      path: `/${node.slug}`,
      component: coffeeType,
      context: {
        allData: queryResults.data.allContentfulCoffeeTypes,
        coffeeType: node,
      },
    })
    node.coffeeTypeOfferings.forEach(coffee => {
      createPage({
        path: `/${node.slug}/${coffee.slug}`,
        component: coffeePage,
        context: {
          allData: queryResults.data.allContentfulCoffeeTypes,
          coffee: coffee,
        },
      })
    })

  })
  const allCoffeePage = path.resolve(`./src/pages/allCoffees.js`);
  createPage({
      path: `/coffees`,
      component: allCoffeePage,
      context:{
          allData: queryResults.data.allContentfulCoffeeTypes,
      }
  })
}
