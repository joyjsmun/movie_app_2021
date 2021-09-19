import React from "react"
import PropTypes from "prop-types";

function Food ({name,foodImg,rating}){
  return (
    <div>
    <h1>I love {name}</h1>
    <img src={foodImg} />
    {/* <h1>rating:{rating}</h1> */}
    </div>
  )
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  foodImg:PropTypes.string.isRequired,
  rating:PropTypes.number
}


const foodIlike =[
  {
  id:1,
  name:"kimchi soup",
  image:"https://c8.alamy.com/comp/P8DGP0/korean-food-kimchi-stew-kimchi-jjigae-P8DGP0.jpg",
  rating: 5
},
{
  id:2,
  name:"kimchi fried rice",
  image:"https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?fit=1024%2C682&ssl=1",
  rating:4
},
{
  id:3,
  name:"kimchi gimbab",
  image:"https://recipe1.ezmember.co.kr/cache/recipe/2015/09/30/4ad67d0dff954388cbb51bd2ce5421e3.jpg",
  rating:3.5
},
{
  id:4,
  name:"kimchi ramen",
  image:"https://cdn.imweb.me/thumbnail/20200303/c767a22cd2ae6.jpg",
  rating:3
},

]

function renderFood(dish){
 return <Food name={dish.name} foodImg={dish.image} key={dish.id} rating={dish.rating}/>
}


function App() {
  return (
    <div className="App">
      {foodIlike.map(renderFood)}
    </div> 
  );
}

export default App;
