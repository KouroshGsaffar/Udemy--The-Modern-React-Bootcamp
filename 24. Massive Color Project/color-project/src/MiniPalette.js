import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react'

const styles = {
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal'
    }
}

function MiniPalette(props) {
    const { classes } = props;
    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);