import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

const App = () => {

    // const APP_ID = "51e4a2e2";
    // const APP_KEY = "d8832295b6e9acdaf80a20f2aeeeaaf3";

    // useEffect(() => {
    //     getFood();
    // }, []);

    // const getFood = async () => {
    //     const response = await fetch(
    //         `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${APP_ID}&app_key=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     console.log(data);
    // };

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}>
                        <Content />
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;