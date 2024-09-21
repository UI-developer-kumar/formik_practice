import React from 'react'

const FormHandlingTwo = () => {
    
    const [details, setDetails] = useState({
        firstName: "",
        gender:""
    })

    const handleChange = (e) => {
        setDetails({...details, firstName:e.target.value})
    }

    const handleRadio = (e) => {
        setDetails({...details, gender:e.target.value})
    }

    return(
        <div>
            <h1>Formik</h1>
            <input type="text"   onKeyUp={(e) =>{handleChange(e)}} />
            
            <div>
                <input type="radio" onChange={(e)=>{handleRadio(e)}} name='gen' value="male"/>Male
                <input type="radio" onChange={(e)=>{handleRadio(e)}} name='gen' value="female"/>Female
                <input type="radio" onChange={(e)=>{handleRadio(e)}} name='gen' value="other"/>Other
            </div>

            {JSON.stringify(details)}
        </div>
    )
}

export default FormHandlingTwo