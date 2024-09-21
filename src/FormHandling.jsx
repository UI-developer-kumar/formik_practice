import React, { useState } from 'react'

const FormHandling = () => {

    const [list, setList] =useState([])
    const [message, setMessage ] = useState([
        {
            text: "",
            id :""
        }
    ])
    // const handleChange = (e) => {
    //     setMessage(e.target.value)
    // }

    const handleSubmit = (e) => {
        let newTodo = {
            text: message,
            id : new Date().getTime().toString()
        }
        console.log(newTodo);
        
        setList([...list, newTodo])
        setMessage({
            text: "",
            id:""
        })
    }
    

    return(
        <div>
            <h1>Form Handling</h1>
            <input type="text" value={message.text}  onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={handleSubmit}>submit</button>
            <ul>
            {
                
                list.map((l,i) => {
                    return <li key={i}>{l.text}</li>
                })
            }
            </ul>
        </div>
    )
}

export default FormHandling