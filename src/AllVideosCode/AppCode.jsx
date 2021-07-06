
// States IN Class Component 

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:1
//         }
//     }
//     upData(){
//         this.setState({
//             data:this.state.data+1
//         })
//     }
//     render(){
//         return(
//             <>
//             <h1>Class Component </h1>
//             <h1>{this.state.data}</h1>
//             <button onClick={()=>this.upData()}>Update me</button>
//             </>
//         )
//     }
// }
// export default App;

// import {useState} from 'react'


// Get Input from user
// import React from 'react';
// import {useState} from 'react'
// function App (){
//         const [data,setData]=useState(null)
//         const [print, setPrint] = useState(false);
//         function getData(val)
//         {
//             setData(val.target.value)
//             setPrint(false)
//         }
//         return(
//             <>
//             {
//                 print?
//                 <h1>{data}</h1>
//                 :null
//             }
//             <input type="text" onChange={getData} />
//             <button onClick={()=>setPrint(true)}> click me</button>
//             </>

//         )
//     }


//  export default App;

//Toggle The Btn

// import React from 'react';
// import {useState} from 'react'
// function App (){
//         const [status,setStatus]=useState(false)
//         return(
//             <>
//             {
//                 status?
//                 <h1>Hello Wolrd</h1>
//                 :null
//             }

//             <button onClick={()=>setStatus(!status)}> click me</button>
//             </>

//         )
//     }
//  export default App;

                                    //Basic Form Submission
// import React from 'react';
// import { useState } from 'react'
// function App() {
//     const [name, setName] = useState("")
//     const [interest, setCheckIt] = useState(false)
//     const [option, setOption] = useState()

//     function getFormData(e) {
//         e.preventDefault()
//         console.log("This is " + name + "<br>" + "this is " + interest + "<br>" + "This is " + option)
//     }
//     function handleChange(event) {
//         setOption(event.target.value)
//     }
//     return (
//         <>
//             <form onSubmit={getFormData}>
//                 <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /> <br />
//                 <select name='option' onChange={handleChange}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                 </select>
//                 <br /><br />
//                 <input type="checkbox" name="" id="" onChange={(e) => setCheckIt(e.target.checked)} /> <span>Check this box</span> <br />
//                 <button type="submit">Submit it </button>
//             </form>
//         </>

//     )
// }
// export default App;


//Conditional 

import React from 'react';
import {useState} from 'react'
function App (){
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


 export default App;


