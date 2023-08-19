import React from "react";
import "./IngredientCard.css"
const IngredientCard = ({recipe}) => { 
    console.log("recipe", recipe.map(x => x.title))
    const ingredientNames = recipe.map((x) => x.title)
    return(
        <h1>
        {ingredientNames.map((x) => <div className="ingredientNames">{x}</div>)}
        </h1>
    )
}

export {IngredientCard}