import React from 'react';
import SearchItem from './SearchItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));

const SearchList = ({ results, onLogHandler }) => {
    const classes = useStyles();
    const renderItems = results.map(result => {
        return (
            <Grid item key={result.fdcId} className={classes.marginItem} >
                <SearchItem result={result} onLogHandler={onLogHandler} />
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