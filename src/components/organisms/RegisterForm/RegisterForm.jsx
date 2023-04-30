import React, { useContext } from 'react'
import { FormContext } from '../../../providers/FormProvider'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import Field from '../../molecules/Field/Field'
import RolesField from '../../molecules/RolesField/RolesField'
import { Wrapper } from './RegisterForm.styles'

const RegisterForm = () => {
    const {
        formValues: { email, password, confirmPassword, nip, phone, roles },
        handleSubmit,
        handleInputChange,
    } = useContext(FormContext)

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Title>Register Form</Title>
            <Field
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
                title="Email jest chujowy"
                placeholder=" "
            />
            <Field
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
                placeholder=" "
            />
            <Field
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
                placeholder=" "
            />
            <Field
                label="NIP"
                type="text"
                name="nip"
                value={nip}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                title="NIP should cointain 10 numbers"
                required
                placeholder=" "
            />
            <Field
                label="Phone"
                type="text"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                pattern="[0-9]{9}"
                title="Number phone should cointain 9 numbers"
                placeholder=" "
            />
            <RolesField
                label="Roles"
                name="roles"
                value={roles}
                onChange={handleInputChange}
                required
            />
            <Button type="submit">Summary</Button>
        </Wrapper>
    )
}

export default RegisterForm
