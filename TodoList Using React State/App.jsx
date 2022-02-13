

import React, {useState} from "react";
import Todo from './Todo';

const App=()=>{


    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };

    const listOfItems=() =>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];

        })
        setInputList(" ");
    };

    const deleteItems=(id)=>{
        {/*console.log("deleted")*/}
        setItems((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
    return index!==id;
            } )
        })

    };
    
    return(
<React.Fragment>
<div className="main_div">
    <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList }/>
        <button onClick={listOfItems}><i className="fa fa-times" aria-hidden="true"></i>+</button>


        <ol>
           {/* map(value,index*/}
            {
            items.map( (itemval,index) => {
              return  <Todo key={index}  
              id={index} 
              text={itemval}

                onSelect={deleteItems}


              />;  {/*when user clicks the data is stored in empty array   */}
            }) }
        </ol>
    </div>
</div>
</React.Fragment>
    )
}



export default App;