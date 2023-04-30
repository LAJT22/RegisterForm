import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialFormState = {
    email: '',
    password: '',
    confirmPassword: '',
    nip: '',
    phone: '',
    roles: '',
}

export const FormContext = React.createContext({
    formValues: [],
    handleSubmit: () => {},
    handleInputChange: () => {},
})

const FormProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialFormState)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValues.password !== formValues.confirmPassword) {
            alert('Passwords must match')
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
        <FormContext.Provider
            value={{
                formValues,
                handleSubmit,
                handleInputChange,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider
