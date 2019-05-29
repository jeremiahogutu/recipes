import React from 'react';
import {Grid} from "@material-ui/core";
import MediaCard from "./mediacard";

const Recipes = props => {
    return (
        <div style={{maxWidth: '1100px'}}>
            <Grid container>

                {props.recipes !== null && props.recipes.map((recipe, i) => {
                    return (
                        <Grid key={i} item xs style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexBasis: 'auto',
                            paddingBottom: '20px'
                        }}>
                            <MediaCard style={{minwidth: 300}} recipeName={recipe.recipe.label}
                                       recipeImage={recipe.recipe.image} recipeSource={recipe.recipe.source}
                                       recipeButtonText='View Recipe' recipeId={i}/>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
};

export default Recipes;
