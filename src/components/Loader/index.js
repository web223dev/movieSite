import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        // position: 'absolute',
        color: '#fff',
        display: 'block',
        margin: '0 auto',
        // left: 0,
        // right: 0
    },
}));


const Loader = () => {
    const classes = useStyles();
    return (
        <div style={{ margin: '4em 0'}}>
            <CircularProgress className={classes.progress} />
        </div>
        
    );
};

export default Loader;