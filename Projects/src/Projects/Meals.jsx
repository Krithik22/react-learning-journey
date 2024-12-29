import React, { useState, useEffect } from 'react'
// import axios from "./axios"


const MealTemplate = ({strMeal, strMealThumb, idMeal}) => {
    return (
        <>
            <img src={strMealThumb} alt={strMeal} />
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
        </>
    )
}
const Meals = () => {

    const [mealList, setMealList] = useState();

    useEffect(() => {
        fetch("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => setMealList(res.data.meals))
        .catch(err => console.log(err))
    },[])

  return (
    <>
        {
            mealList.map(({strMeal, strMealThumb, idMeal}) => (
                <MealTemplate strMeal={strMeal} strMealThumb={strMealThumb} idMeal={idMeal} />
            ))
        }
    </>
  )
}

export default Meals