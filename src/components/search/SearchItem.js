import React from 'react';
import { Card, Typography, Button, Grid, CardHeader, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    disablePadding: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10
    }
}));

const SearchItem = ({ result }) => {
    const classes = useStyles();

    const protein = result.foodNutrients.find(nutrient => nutrient.nutrientId === 1003);
    const carbs = result.foodNutrients.find(nutrient => nutrient.nutrientId === 1005);
    const fat = result.foodNutrients.find(nutrient => nutrient.nutrientId === 1004);

    return (
        <Card variant="outlined">
            <CardHeader title={result.lowercaseDescription} subheader={result.brandOwner} />
            <CardContent className={classes.disablePadding}>
                <Typography variant="body2">
                    {`Fat: ${fat ? fat.value : '0'}g `}
                    {`Carbohydrate: ${carbs ? carbs.value : '0'}g `}
                    {`Protein: ${protein ? protein.value : '0'}g`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" size="small" >Log Food</Button>
                {/* <Button variant="outlined" color="secondary" size="small" >Add to Recipe</Button> */}
            </CardActions>

        </Card>

    );
}

export default SearchItem;