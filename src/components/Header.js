import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1
    },
    buttonStyles: {
        marginRight: theme.spacing(2)
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.typographyStyles}>FoodTrackr</Typography>
                    {/* <Button className={classes.buttonStyles} variant="outlined">Sign In</Button>
                    <Button variant="contained" color="secondary">Sign Up</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;