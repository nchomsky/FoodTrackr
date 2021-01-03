import React from 'react';
import SearchItem from './SearchItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));

const SearchList = ({ results }) => {
    const classes = useStyles();
    console.log(results);
    const renderItems = results.map(result => {
        return (
            <Grid item className={classes.marginItem} >
                <SearchItem key={result.key} result={result} />
            </Grid>
        );
    });
    return (
        <Grid container direction="column">
            {renderItems}
        </Grid>
    );
}

export default SearchList;