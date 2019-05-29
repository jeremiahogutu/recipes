import React from 'react';
import PropTypes from 'prop-types';

import {Typography, Paper, Grid, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#fff',
        background: '#303f9f',
        borderRadius: 0
    },
});

function TopBanner(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Recipes</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

TopBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBanner);
