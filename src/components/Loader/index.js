import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: '#424242',
    },
    barColorPrimary: {
        backgroundColor: '#fafafa',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    progress: {
        color: '#fff',
        display: 'block',
        margin: '0 auto',
    }
}));

const Loader = ({ mobile }) => {
    const classes = useStyles();
    return (
        <div className="loader">
            {
                mobile ?
                    <ColorLinearProgress /> :
                    <CircularProgress className={classes.progress} />
            }
        </div>
    );
};

export default Loader;