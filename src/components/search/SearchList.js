import React from 'react';
import SearchItem from './SearchItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));

const SearchList = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item className={classes.marginItem} >
                <SearchItem />
            </Grid>
            <Grid item className={classes.marginItem} >
                <SearchItem />
            </Grid>
            <Grid item className={classes.marginItem} >
                <SearchItem />
            </Grid>
            <Grid item className={classes.marginItem} >
                <SearchItem />
            </Grid>
        </Grid>
    );
}

export default SearchList;