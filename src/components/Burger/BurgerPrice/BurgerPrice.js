import React,{ Component } from "react";
import Aux from "../../../hoc/Auxillary";
import classes from './BurgerPrice.module.css';
class BurgerPrice extends Component{

render(){

    let totalPrice= this.props.price;

    return(
        <Aux>
        <div className={classes.row}>
        <div className={classes.Price}>Price: ${totalPrice.toFixed(2)}</div>
        </div>
        </Aux>

    );
}

}


export default BurgerPrice;