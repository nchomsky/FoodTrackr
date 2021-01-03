import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginSearchBar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    }
}));

const SearchBar = (props) => {
    const [term, setTerm] = useState('');
    const classes = useStyles();


    const onFormSubmit = (event) => {
        event.preventDefault();

        props.onFormSubmit(term);
    }

    return (
        <div>
            <form className={classes.marginSearchBar} onSubmit={onFormSubmit} noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search for Food" variant="outlined" value={term} onChange={event => setTerm(event.target.value)} />
            </form>
        </div>
    );
}

export default SearchBar;