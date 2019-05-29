import React, {Component} from 'react';
import Form from "./components/Form";
import TopBanner from "./components/topbanner";
import Recipes from "./components/recipes";

class App extends Component {
    state = {
        recipes: []
    };
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);

        console.log(api_call);
        const data = await api_call.json();
        this.setState({
            recipes: data.hits
        })
        console.log(this.state.recipes)
    };


    render() {
        return (
            <div className="App">
                <TopBanner/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Form getRecipe={this.getRecipe}/>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
                  <Recipes recipes={this.state.recipes}/>
                </div>
            </div>
        );
    }
}

export default App;
