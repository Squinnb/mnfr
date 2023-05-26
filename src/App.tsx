import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Register from './components/Register';

export interface Drink {
  id: string;
  name: string;
  price: number;
  count: number;
}



function App() {
  const [order, setOrder] = useState<Array<Drink>>([
    {id: "coffee", name: "コーヒー", price: 480, count: 0},
    {id: "tea", name: "紅茶", price: 480, count: 0},
    {id: "milk", name: "ミルク", price: 480, count: 0},
    {id: "cola", name: "コーラ", price: 480, count: 0},
    {id: "beer", name: "ビール", price: 480, count: 0}
  ])

  const addDrink = (index: number) => {
    setOrder(
      (oldOrder) => {
        const newOrder = [...oldOrder];
        newOrder[index] = {...newOrder[index], count: newOrder[index].count+1}
        return newOrder;
      }
      )
  }

  return (
    <div className="App" style={{margin: "25px"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <Menu addDrink={addDrink} drinks={order}/>
        <Register order={order} />
      </div>
    </div>
  );
}

export default App;
