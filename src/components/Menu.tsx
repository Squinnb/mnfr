import React from 'react'
import "../App.css"
import { Drink } from '../App';

interface Props{
    drinks: Array<Drink>;
    addDrink: (i:number) => void;
}

function Menu(props: Props) {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        {props.drinks.map((drink, i) => {
            return (
                <button onClick={() => {props.addDrink(i)}} className='drinkBtn' id={`${drink.id}`}>
                    <div className='btnChild'>
                        <div className='left'>{drink.name}</div>
                        <div className='right'>{drink.price}円</div>
                    </div>
                    <div id={`${drink.id}-count`} className='circleCount'>{drink.count}</div>
                </button>
            )
        })}
        
    </div>
  )
}

export default React.memo(Menu)