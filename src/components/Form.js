import React from 'react';
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
       marginTop: '50px'
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

const Form = () => {
    const classes = useStyles();
    return (
        <form className={classes.container}>
            <TextField
                id="standard-bare"
                className={classes.textField}
                defaultValue="Bare"
                margin="normal"
            />
            <Button variant="contained" color="primary">Search</Button>
        </form>
    );
};

export default Form;
