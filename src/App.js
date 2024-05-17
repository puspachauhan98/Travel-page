import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 3, packed: true },
  { id: 4, description: "pants", quantity: 2, packed: false },
  { id: 4, description: "shoes", quantity: 1, packed: false },

];

export default function App(){
  return (<div className='app'>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
    
    
  </div>
  );
}
  function Logo(){
    return <h1>🏝️ Far Away 🧳</h1>;
  }

  function Form(){
    const [description, setDescription]= useState('money 💵');
    const [ quantity, setQuantity]= useState('');
    function handleSubmit(e){
      e.preventDefault();
// if(!description) return;

      
      const newItem={description,quantity,packed:false, id:Date.now()};
      console.log(newItem)
    }

    return (
    <form className='add-form' onSubmit ={handleSubmit}>

      <h3> What do you need for your trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
        {Array.from({length:20},(_,i)=> i+1).map
        ((add)=>(
          <option value={add} key={add}>{add}</option>))}
        </select>
        <input type='text' placeholder='Item...' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button> Add button</button>
        

      </form>

  );   
  }
  function PackingList(){
    return( 
    <div className='list'>
      <ul>
      {initialItems.map((good)=>(<Item good={good} key={Item.id}/>))}
   </ul>
    </div>
    );
  }
  function Item ({good}){
    return(
    <li>
      <span style={good.packed ? { textDecoration:'line-through'}
      : {}}>
    
      {good.description}
     {good.quantity}
     </span>
      <button>😁</button>
      </li>
    );
    

  }


  function Stats(){
    return ( 
    <footer className='stats'> 
      <em>
      You have X items on your list, and you already packed X(X%)
    </em></footer>

  );
  
}
