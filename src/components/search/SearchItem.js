import React from 'react';
import { Card, Typography, Button, Grid, CardHeader, CardActions } from '@material-ui/core';

const SearchItem = () => {
    return (

        <Card variant="outlined">
            <CardHeader title="Search Item" subheader="Protein: 5g Carbohydrates: 12g Fat: 6g" />
            <CardActions>
                <Button variant="outlined" color="Primary" size="small" >Log Food</Button>
                <Button variant="outlined" color="secondary" size="small" >Add to Recipe</Button>
            </CardActions>

        </Card>

    );
}

export default SearchItem;