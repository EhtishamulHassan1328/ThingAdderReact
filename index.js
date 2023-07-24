import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function App(){

  const [thingsElement, showThings]= React.useState(["Thing 1","Thing 2"]);

  function addItem(){

    showThings(prevThingsArray=>
      {
        return [...prevThingsArray, `Thing ${prevThingsArray.length +1} `]
      })
    
  }


  const thinger=thingsElement.map(things=>
    <p>{things}</p>)


  return(
  <div className='div1'>
      <button className='but1' onClick={addItem}>
        Add Item
      </button>

      {thinger}
  </div>
)}


ReactDOM.render(<App/>,document.getElementById("root"));