import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/atoms/Button/Button'
import { FormContext } from '../../providers/FormProvider'
import { Wrapper } from './ConfirmRegister.styles'
import Title from '../../components/atoms/Title/Title'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'

const printPwdStarts = (pwd) => {
    const howMany = pwd.length
    let hashedPwd = ''
    for (let i = 0; i < howMany; i++) {
        hashedPwd += '*'
    }
    return hashedPwd
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
            <Button>Confirm</Button>
        </Wrapper>
    )
}

ConfirmRegister.propTypes = {}

export default ConfirmRegister
