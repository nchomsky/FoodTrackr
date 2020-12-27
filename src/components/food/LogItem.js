import React from 'react';
import { Card, Typography, IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const LogItem = () => {
    return (

        <Card variant="outlined">
            <Grid container direction="row">
                <Typography >LogItem</Typography>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Card>

    );
}

export default LogItem;