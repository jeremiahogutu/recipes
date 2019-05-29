import React from 'react';
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '50px 0'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}));

const Form = props => {
    const classes = useStyles();
    return (
        <form className={classes.container} onSubmit={props.getRecipe}>
            <TextField
                id="standard-bare"
                name="recipeName"
                className={classes.textField}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
    );
};

export default Form;
