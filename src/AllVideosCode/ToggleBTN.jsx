//Toggle The Btn

import React from 'react';
import {useState} from 'react'
function ToggleBTN (){
        const [status,setStatus]=useState(false)
        return(
            <>
            {
                status?
                <h1>Hello Wolrd</h1>
                :null
            }

            <button onClick={()=>setStatus(!status)}> click me</button>
            </>

        )
    }
 export default ToggleBTN;