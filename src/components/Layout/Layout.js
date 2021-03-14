import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';

const layout=(props)=>(
    <Aux>
    <div>Toolbar, Side drawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default layout;