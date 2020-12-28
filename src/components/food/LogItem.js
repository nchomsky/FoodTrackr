import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { Divider, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const LogItem = () => {
    return (
        <div>
            <ListItem>
                <ListItemText primary="Log Item" />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </div>


    );
}

export default LogItem;