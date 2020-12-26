import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginStyleMin: {
        marginTop: theme.spacing(2)
    }
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.marginStyleMin} noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </div>
    );
}

export default SearchBar;