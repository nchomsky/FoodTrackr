import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginSearchBar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.marginSearchBar} noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search for Food" variant="outlined" />
            </form>
        </div>
    );
}

export default SearchBar;