import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './search/SearchBar';
import SearchList from './search/SearchList';
import FoodLog from './food/FoodLog';

const Content = () => {


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <SearchBar />
                <SearchList />
            </Grid>
            <Grid item xs={6}>
                <FoodLog />
            </Grid>
        </Grid>
    );

};

export default Content;
