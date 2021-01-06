import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//     root: {
//         backgroundImage: `url(${process.env.PUBLIC_URL + "/images/vegetables.jpg"})`,
//         background: "linear-gradient(90deg, rgba(black, 0.4), rgba(black, 0.4))",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         minHeight: "100vh",
//     }
// }));

const App = () => {
    // const classes = useStyles();

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container >
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