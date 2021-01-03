import React from 'react';
import { Card, Typography, Button, Grid, CardHeader, CardActions } from '@material-ui/core';

const SearchItem = ({ result }) => {

    return (

        <Card variant="outlined">
            <CardHeader title={result.lowercaseDescription} subheader={result.brandOwner} />
            <CardActions>
                <Button variant="outlined" color="primary" size="small" >Log Food</Button>
                <Button variant="outlined" color="secondary" size="small" >Add to Recipe</Button>
            </CardActions>

        </Card>

    );
}

export default SearchItem;