import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './search/SearchBar';
import SearchList from './search/SearchList';
import FoodLog from './food/FoodLog';
import foodData from '../api/foodData';

// Food Data Central API Key: 
const KEY = 'D258W2mIJWkYDvyAveLwcy5iDVPATxZcB6N8ueSX';
const Content = () => {

    // Multiple useState hooks is best practice
    const [searchResults, setSearchResults] = useState([]);
    const [foodLog, setFoodLog] = useState([]);

    const onSearchSubmit = async (term) => {
        const response = await foodData.get('foods/search', {
            params: {
                api_key: KEY,
                query: term,
                pageSize: 4
            }
        });
        setSearchResults(searchResults => searchResults = response.data.foods);
    };

    // Set the default parameter as an empty array so that it only rerenders the component once
    // Made the mistake of not doing this and got stuck in an infinite loop and timed out my api
    // useEffect(onSearchSubmit, []);


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <SearchBar onFormSubmit={onSearchSubmit} />
                <SearchList results={searchResults} />
            </Grid>
            <Grid item xs={6}>
                <FoodLog log={foodLog} />
            </Grid>
        </Grid>
    );

};

export default Content;
