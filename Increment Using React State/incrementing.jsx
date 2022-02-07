import React, { useState } from "react";


import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from  '@material-ui/icons/Delete';


const IncDec=()=>{

    const [num,setNum]=useState(0);

    const incre=()=>{
        setNum(num+1);
    }
    const decre=()=>{
        if(num>0)
        {
        setNum(num-1);
        }
        else{
            setNum(0);
            alert('Below Zero is not aloud!');
        }
    }


    return (
        <React.Fragment>
            <div className="main_div">
            <div className="center_div">
                <h1>{num}</h1>
                <div>
                    <div className="btn_div">
                    <button onClick={incre}><AddIcon/></button>
                    
                    <button onClick={decre}><DeleteIcon/></button>
                    </div>  
                </div>
               

            </div>
            </div>
        </React.Fragment>
    )
}
export default IncDec;