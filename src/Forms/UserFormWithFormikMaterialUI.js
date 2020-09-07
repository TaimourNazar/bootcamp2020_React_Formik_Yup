import React,{useRef,useState} from 'react'
import {useFormik, Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'

function UserFormWithFormikMaterialUI() {
    const formik = useFormik({
        initialValues:{
            name: "",
            age: 0
        },
        onSubmit:(values)=>{
            console.log(values);
        },
        validationSchema:Yup.object(
            {
                name: Yup.string()
                    .required("Name is required")
                    .max(20, "Name should be less than 20 characer"),
                age: Yup.number()
                    .max(60,"Age should be less than 60")
                    .min(10,"Age should be greater than 10")
            }
        )
    });

    return (
        <div>
            <div>User Form with Formik MaterialUI</div>
            <Formik initialValues={{
                name: "",
                age: 0
            }}
            onSubmit={(values)=>{
                console.log(values);
            }}
            validationSchema={
                Yup.object(
                    {
                        name: Yup.string()
                            .required("Name is required")
                            .max(20, "Name should be less than 20 characer"),
                        age: Yup.number()
                            .max(60,"Age should be less than 60")
                            .min(10,"Age should be greater than 10")
                    }
                )
            }
            >
            {
                (formik)=>(
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <Field id="name" name="name" type="text" as={TextField} variant="outlined" label="Name::"/> 
                            <ErrorMessage name="name" render={(msg)=>(
                                <span style={{color:"red"}}>{msg}</span>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            <Field id="age" name="age" type="number" as={TextField} variant="filled" label="Age::"/> 
                            <ErrorMessage name="age"/>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )
            }
            </Formik>
        </div>
    );
}

export default UserFormWithFormikMaterialUI;
