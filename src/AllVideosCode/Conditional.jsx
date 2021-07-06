import React from 'react';
import {useState} from 'react'
function Conditional (){
        const [loggedIn,setloggedIn]=useState(3)
        
      //1,2,3
        return(
            <>
            {
            loggedIn==1? <h1>Hey Maham</h1>
            :loggedIn==2? <h1>It 2</h1>
            : <h1>Its 3</h1>
            }
            </>

        )
    }



 export default Conditional;