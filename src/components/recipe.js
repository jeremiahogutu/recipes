import React, {Component} from 'react';

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount() {
        
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Recipe Component
            </div>
        );
    }
};

export default Recipe;
