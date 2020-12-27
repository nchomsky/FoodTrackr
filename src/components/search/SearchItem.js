import React from 'react';
import { Card, Typography, Button, Grid } from '@material-ui/core';

const SearchItem = () => {
    return (

        <Card variant="outlined">
            <Grid container direction="row">
                <Typography >Search Item</Typography>
                <Button variant="outlined" color="primary">Log Food</Button>
                <Button variant="outlined" color="secondary">Add to Recipe</Button>
            </Grid>

        </Card>

    );
}

export default SearchItem;