import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import Field from '../../molecules/Field/Field'
import RolesField from '../../molecules/RolesField/RolesField'
import { Wrapper } from './RegisterForm.styles'

const initialFormState = {
    email: '',
    password: '',
    ConPassword: '',
    nip: '',
    phone: '',
    roles: '',
}

const RegisterForm = () => {
    const [formValues, setFormValues] = useState(initialFormState)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValues.password !== formValues.ConPassword) {
            alert('WYPIERDALAJ')
            return
        }
        navigate('/summary')
        console.log('dziala')
    }

    const handleInputChange = (e) => {
        console.log(formValues)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <>
            <Wrapper onSubmit={handleSubmit}>
                <Title>Register Form</Title>
                <Field
                    label="Email"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                />
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    required
                />
                <Field
                    label="Confirm Password"
                    type="password"
                    name="ConPassword"
                    value={formValues.ConPassword}
                    onChange={handleInputChange}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    required
                />
                <Field
                    label="NIP"
                    type="number"
                    name="nip"
                    value={formValues.nip}
                    onChange={handleInputChange}
                    required
                />
                <Field
                    label="Phone"
                    type="number"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                />
                <RolesField
                    label="Roles"
                    name="roles"
                    value={formValues.roles}
                    onChange={handleInputChange}
                    required
                />

                <Button type="submit">Register</Button>
            </Wrapper>
        </>
    )
}

export default RegisterForm
