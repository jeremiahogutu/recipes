import React, {Component} from 'react';
import Form from "./components/Form";
import TopBanner from "./components/topbanner";

class App extends Component {
    state = {
        recipes: []
    };
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);

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
                    <Form getRecipe={this.getRecipe} style={{marginTop: '50px'}}/>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
                    {this.state.recipes.map((recipe, i) => {
                        return <p key={i}>{ recipe.recipe.label }</p>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
