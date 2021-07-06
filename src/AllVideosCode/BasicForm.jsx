//Basic Form Submission
import React from 'react';
import { useState } from 'react'
function BasicForm() {
    const [name, setName] = useState("")
    const [interest, setCheckIt] = useState(false)
    const [option, setOption] = useState()

    function getFormData(e) {
        e.preventDefault()
        console.log("This is " + name + "<br>" + "this is " + interest + "<br>" + "This is " + option)
    }
    function handleChange(event) {
        setOption(event.target.value)
    }
    return (
        <>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /> <br />
                <select name='option' onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <br /><br />
                <input type="checkbox" name="" id="" onChange={(e) => setCheckIt(e.target.checked)} /> <span>Check this box</span> <br />
                <button type="submit">Submit it </button>
            </form>
        </>

    )
}
export default BasicForm;