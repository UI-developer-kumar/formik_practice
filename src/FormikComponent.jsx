import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikComponent = () => {
    return(
        <div className='m-2 p-2 border border-2 border-danger'>
            <h1>Formik Component</h1>
            <Formik initialValues={
                {
                    firstName:"",
                    lastName:""
                }
            }
            validationSchema={Yup.object({
                firstName:Yup.string().required("firstname is mandatory"),
                lastName:Yup.string().required('lastname is mandatory')
            })}             
            onSubmit={(values)=>{
                console.log(values);
                
            }}>{
                (sfrom)=> {
                    return(
                        <form>
                            <Field type="radio" name="gender" value='male' />:male <br />
                            <input type="radio" {...sfrom.getFieldProps('gender')} value='female' />:female <br />
                            <input type="radio" {...sfrom.getFieldProps('gender')} value='others' />:others <br />
                            <div>Techs</div>
                            <input type="checkbox" {...sfrom.getFieldProps("techs")} value='reactjs' />:ReactJs <br />
                            <input type="checkbox" {...sfrom.getFieldProps("techs")} value='javascript' />:Javascript <br />
                            <input type="checkbox" {...sfrom.getFieldProps("techs")} value='css' />:Css <br />
                            <input type="checkbox" {...sfrom.getFieldProps("techs")} value='html' />:HTML <br />
                            <Field type="text" name='firstName'/>
                            <br />
                            {
                                sfrom.touched.firstName && sfrom.errors.firstName && <div>{sfrom.errors.firstName}</div>
                            }
                            <input type="text" {...sfrom.getFieldProps("lastName")}/> <br />
                            <ErrorMessage name='lastName' component='div' />
                            <button>save</button>
                        </form>
                    )
                }
            }

            </Formik>

        </div>
    )
}

export default FormikComponent