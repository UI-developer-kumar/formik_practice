import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Formik = () => {
    
        const sForm = useFormik({
            initialValues:{
                firstName:"",
                lastName:""
            },
            validationSchema:Yup.object({
               firstName:Yup.string().required("this field mandatory").min(4,"chinaperlu vadhu") 
            }),
            onSubmit: (values) => {
                console.log(values);
                
            }
        })

       
    return(
        <div>
            <h1>Formik</h1>
            <form onSubmit={sForm.handleSubmit}>
            {/* className={sForm.touched.firstName && sForm.errors.firstName && "outline-danger"} */}
            {/* name='firstName' onChange={sForm.handleChange} onBlur={sForm.handleBlur} */}
                <input  type="text" {...sForm.getFieldProps('firstName')} />
                <br />
                {
                    sForm.touched.firstName && sForm.errors.firstName && (<div>{sForm.errors.firstName}</div>)
                }
                {/* name='lastName' onChange={sForm.handleChange} */}
                <input type="text" {...sForm.getFieldProps('lastName')}/>
                <br />
                <button type='submit'>submit</button>
            </form>
                {/* {JSON.stringify(sForm)} */}
        </div>
    )
}

export default Formik