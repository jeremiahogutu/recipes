import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
                    <Paper className={classes.paper}>Recipe Search</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

TopBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBanner);
