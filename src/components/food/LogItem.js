import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { Divider, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const LogItem = ({ item, deleteFoodHandler }) => {

    const protein = item.foodNutrients.find(nutrient => nutrient.nutrientId === 1003);
    const carbs = item.foodNutrients.find(nutrient => nutrient.nutrientId === 1005);
    const fat = item.foodNutrients.find(nutrient => nutrient.nutrientId === 1004);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <ListItem>
                <ListItemText primary={capitalizeFirstLetter(item.lowercaseDescription)} secondary={`Fat: ${fat ? fat.value : '0'}g Carbohydrate: ${carbs ? carbs.value : '0'}g Protein: ${protein ? protein.value : '0'}g`} />
                <ListItemSecondaryAction>
                    {/* <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton> */}
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteFoodHandler(item)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </div>


    );
}

export default LogItem;