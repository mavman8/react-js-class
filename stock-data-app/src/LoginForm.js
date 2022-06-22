import React, { Component } from 'react'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from'yup'; 

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is not valid.')
        .required('Email is required.'),
    password: Yup.string()
        .min(6, 'Password must be 6 characters') 
        .required('Password is required.')

})

class LogForm extends Component{

    render(){

        return(
            <div>
                <h2>
                    <Formik
                        initialValues={{email: '', password:''}}
                        validationSchema={validationSchema}
                        onSubmit={(values)=> 
                            this.props.handleFormUpdate(values)
                        }>
                        <Form>
                            <label>
                                Email: <field type="email" name="email"></field>
                            </label>
                            <ErrorMessage name="email" Component="div"></ErrorMessage>
                            <label>
                                Password: <field type="password" name="password"></field>
                            </label>
                            <ErrorMessage name="password" Component="div"></ErrorMessage>
                            <button type="submit"> Submit</button>
                        </Form>
                    </Formik>
                </h2>
            </div>
        )

     }
}

export default LoginForm;