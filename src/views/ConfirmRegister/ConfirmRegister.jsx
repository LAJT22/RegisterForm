import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/atoms/Button/Button'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'
import Title from '../../components/atoms/Title/Title'
import { FormContext } from '../../providers/FormProvider'
import { Wrapper } from './ConfirmRegister.styles'

const printPwdStarts = (pwd) => {
    const howMany = pwd.length
    let hashedPwd = ''
    for (let i = 0; i < howMany; i++) {
        hashedPwd += '*'
    }
    return hashedPwd
}

const handleApiError = () =>{
    return alert('API temporarily unavailable')
}

const ConfirmRegister = () => {
    const {
        formValues: { email, password, nip, phone, roles },
    } = useContext(FormContext)
    return (
        <Wrapper>
            <Title>Check your details</Title>
            <Paragraph>Email: {email}</Paragraph>
            <Paragraph>Password: {printPwdStarts(password)}</Paragraph>
            <Paragraph>NIP: {nip}</Paragraph>
            {phone && <Paragraph>Phone: {phone}</Paragraph>}
            <Paragraph>User role: {roles}</Paragraph>
            <Link to="/">
                <Button>Edit</Button>
            </Link>
            <Button onClick={handleApiError}>Confirm</Button>
        </Wrapper>
    )
}

ConfirmRegister.propTypes = {}

export default ConfirmRegister
