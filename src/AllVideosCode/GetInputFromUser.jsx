// Get Input from user
import React from 'react';
import {useState} from 'react'
function GetInputFromUser (){
        const [data,setData]=useState(null)
        const [print, setPrint] = useState(false);
        function getData(val)
        {
            setData(val.target.value)
            setPrint(false)
        }
        return(
            <>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}> click me</button>
            </>

        )
    }


 export default GetInputFromUser;