import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class Recipe extends Component {
    state = {
        activeRecipe: []
    };

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const request = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
        const res = await request.json();
        this.setState({
            activeRecipe: res.hits[0]
        });
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {this.state.activeRecipe.length !== 0 &&
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'Column', alignItems: 'center', padding: '25px'}}>
                        <img style={{width: '100%'}} src={recipe.recipe.image} alt=""/>
                        {/*<div>*/}
                        {/*    <p>{recipe.recipe.ingredients}</p>*/}
                        {/*</div>*/}
                        <h4>{recipe.recipe.label}</h4>
                        <ol>
                            {recipe.recipe.ingredients.map((ingredient, i) =>(
                                <li key={i}>{ingredient.text}</li>
                            ))}
                        </ol>
                        {/*<Button type="submit" variant="contained" color="primary">View Recipes</Button>*/}

                        <Button variant="contained" color="primary">
                            <Link to={{pathname: `/`}} style={{textDecoration: 'none', color: '#fff'}}>View Recipes</Link>
                        </Button>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;
