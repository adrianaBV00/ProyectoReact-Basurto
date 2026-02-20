import React from 'react'
import '../css/CheckoutForm.css'
import {Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import * as formik from "formik"
import * as yup from "yup"
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
const CheckoutForm = ({handleOrder=()=>{}}) => {

    const {Formik} = formik
    const schema = yup.object().shape({
        firstName: yup.string()
            .min(2, 'Demasiado corto!')
            .max(50, "Muy largo!")
            .required('Campo Requerido'),
        lastName: yup.string()
            .min(2, 'Demasiado corto!')
            .max(50, "Muy largo!")
            .required('Campo Requerido'),
        email: yup.string().email('email Invalido').required('Campo Requerido'),
        confirmEmail: yup.string()
            .oneOf([yup.ref('email')], 'El email no coincide')
            .required('Campo Requerido'),
    })
   
  return (
    <div className='checkout-form'>
        <h1>Checkout Form</h1>
        <Formik
            validationSchema={schema}
            onSubmit={(values)=>handleOrder(values)}
            initialValues={{
                firstName:'',
                lastName: '',
                email: '',
                confirmEmail: ''
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors})=>(
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId='validacionFirstName'>
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control 
                            type='text'
                            name='firstName'
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='validacionLastName'>
                        <Form.Label>Apellido: </Form.Label>
                        <Form.Control 
                            type='text'
                            name='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='validacionEmail'>
                        <Form.Label>Email: </Form.Label>
                        <InputGroup>
                            <InputGroup.Text id='inputGroupEmail'><MdOutlineEmail /></InputGroup.Text>
                            <Form.Control 
                                type='email'
                                name='email'
                                aria-describedby='inputGroupEmail'
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                    </Form.Group>
                    <Form.Group controlId='validacionConfirmEmail'>
                        <Form.Label>Confirmar Email: </Form.Label>
                        <InputGroup>
                            <InputGroup.Text id='inputGroupConfirmEmail'><MdOutlineEmail /></InputGroup.Text>
                            <Form.Control 
                                type='email'
                                name='confirmEmail'
                                aria-describedby='inputGroupConfirmEmail'
                                value={values.confirmEmail}
                                onChange={handleChange}
                                isValid={touched.confirmEmail && !errors.confirmEmail}
                                isInvalid={!!errors.confirmEmail}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.confirmEmail}
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                    </Form.Group>
                    <div className='form-botones'>
                        <Link className='btn btn-danger' to="/cart" >Cancelar</Link>
                        <Button type='submit'>Generar Orden</Button>
                    </div>
                    
                    
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default CheckoutForm