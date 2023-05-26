import React, {useState, useEffect} from 'react'
import { Drink } from '../App';

interface Props{
    order: Array<Drink>;
}
function Register(props: Props) {
    const [drinkNumber, setDrinkNumber] = useState<number>(props.order.reduce((acc, dr,)=> {return acc + dr.count}, 0))
    const [drinkCost, setDrinkCost] = useState<number>(props.order.reduce((acc, dr,)=> {return acc + (dr.count * dr.price)}, 0))
    const calculateTotal = () => {
        setDrinkNumber(props.order.reduce((acc, dr,)=> {return acc + dr.count}, 0));
        setDrinkCost(props.order.reduce((acc, dr,)=> {return acc + (dr.count * dr.price)}, 0));
    }
    useEffect(()=> {
        calculateTotal()
    }, [props.order])
  return (
    <div style={{textAlign: "left", fontSize: "1.3rem"}}>
        <div style={{borderBottom: "1px solid "}}>お会計</div>
        <div>商品数：<span id='count'>{drinkNumber}</span>個</div>
        <div>合計金額：<span id='price'>{drinkCost}</span>円</div>
    </div>
  )
}

export default React.memo(Register)