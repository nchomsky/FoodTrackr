import React from 'react';
import {v4 as uuidv4} from 'uuid';
import LogItem from './LogItem';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marginItem: {
        marginTop: theme.spacing(1)
    }
}));


// Use List Component from MaterialUI instead of card item
const LogList = ({ log, deleteFoodHandler }) => {
    const classes = useStyles();

    const renderItems = log.map(item => {
        return (
            
            <LogItem key={uuidv4()} item={item} deleteFoodHandler={deleteFoodHandler} />

        );
    });

    return (
        <List disablePadding>
            {renderItems}
        </List>
    );
}

export default LogList;