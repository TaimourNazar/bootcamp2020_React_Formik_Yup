import React,{useRef,useState} from 'react'
import {useFormik, Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

function UserFormWithFormikContext() {
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
            <div>User Form with Formik Context</div>
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
                            <input id="name" type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {
                                formik.errors.name?<div style={{color:"red"}}>{formik.errors.name}</div>:null
                            }
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            <input id="age" type="number" {...formik.getFieldProps("age")}/>
                            {
                                formik.errors.age?<div style={{color:"red"}}>{formik.errors.age}</div>:null
                            }
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

export default UserFormWithFormikContext;
