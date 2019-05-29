import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        minWidth: 300,
    },
    media: {
        height: 140,
    },
});

const MediaCard = props =>{
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.recipeImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.recipeName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        SOURCE: {props.recipeSource}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;
