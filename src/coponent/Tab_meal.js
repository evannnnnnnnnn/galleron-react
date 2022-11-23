import React from 'react';

const Tab_meal = ({ elem }) => {


    return (
        <div className="recipe">
            <h3>{elem.strMeal}</h3>
            <p>origin : {elem.strArea}</p>
            <img src={elem.strMealThumb} alt="" />
            <p className="desc_recipe">{elem.strInstructions}</p>
        </div>
    )
};

export default Tab_meal;