import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((them) => ({
    appbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: "blur(3px)",
        backgroundColor: 'rgb(20,60,100)'
    },
    h1: {
        marginTop: 10,
        marginBottom: 0,
        fontSize: 30
    },
    hr: {
        marginTop: -4,
        width: 130,
        height: 2
    },
    h5: {
        marginTop: -5,
        marginBottom: 5
    }
}));

const Header = props => {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={10}>
                <h1 className={classes.h1}>F I N N S</h1>
                <hr className={classes.hr}></hr>
                <h6 className={classes.h5}>SPORT &#9675; EVENTS &#9675; CLUB</h6>
            </AppBar>
        </div>
    );
};

export default Header;