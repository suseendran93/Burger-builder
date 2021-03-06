import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
];
const buildControls=(props)=>(
        <div className={classes.BuildControls}>
            {controls.map(ctrl=>(
                <BuildControl 
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key={ctrl.label} label={ctrl.label}            
                />
        ))}
                <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}>ORDER NOW</button>
</div>

);


export default buildControls;