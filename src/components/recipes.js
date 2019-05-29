import React from 'react';
import {Grid} from "@material-ui/core";
import MediaCard from "./mediacard";

const Recipes = props => {
    return (
        <div style={{maxWidth: '1100px'}}>
            <Grid container spacing={3}>
                {props.recipes.map((recipe, i) => {
                    return (
                        <Grid key={i} item xs style={{display: 'flex', justifyContent: 'center', flexBasis: 'auto'}}>
                            {/*<div key={i}>*/}
                                {/*<img src={recipe.recipe.image} alt={recipe.recipe.label}/>*/}
                                {/*<p>{recipe.recipe.label}</p>*/}
                                <MediaCard recipeName={recipe.recipe.label} recipeImage={recipe.recipe.image} recipeSource={recipe.recipe.source} recipeId={i}/>
                            {/*</div>*/}
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
};

export default Recipes;
