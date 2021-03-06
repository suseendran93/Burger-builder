import React, {Component} from "react";
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import BurgerPrice from "../../components/Burger/BurgerPrice/BurgerPrice";

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {

    state={
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        puchaseable: false
       
    }

    updatePurchaseState= (ingredients)=>{

        const sum=Object.keys(ingredients)
            .map(igKey=>{
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
               return sum+el;
            },0);

            this.setState({
                purchaseable: sum > 0
            });


    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;

        const updatedIngredients={...this.state.ingredients};   //updatedIngredients copies all ingredients by value using spread operator

        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0)
        return;
        const updatedCount=oldCount-1;
        const updatedIngredients={...this.state.ingredients};

        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    };
    render() {
        const disabledInfo={...this.state.ingredients};

        for (let key in disabledInfo) {
        //    if(disabledInfo[key]<=0){
        //        disabledInfo[key]=true;
        //    }
        //    else{
        //     disabledInfo[key]=false;
        //    }
        disabledInfo[key]=disabledInfo[key]<=0; //This can be written as commented above
        }
        return ( 
            <Aux > 
            <Burger ingredients={this.state.ingredients}/>
            <BurgerPrice price= {this.state.totalPrice}/>
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            purchaseable = {this.state.purchaseable}
            disabled={disabledInfo}
            />
            </Aux>
        );
    }
}

export default BurgerBuilder;