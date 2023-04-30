import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/atoms/Button/Button'
import { Wrapper } from './ConfirmRegister.styles'

const printPwdStarts = (pwd) => {
    const howMany = pwd.length
    let hashedPwd = ''
    for (let i = 0; i < howMany; i++) {
        hashedPwd += '*'
    }
    return hashedPwd
}

const ConfirmRegister = () => {
    return (
        <Wrapper>
            <h2>Podsumowanie:</h2>
            <p>Email:{email}</p>
            <p>Hasło: {printPwdStarts(password)}</p>
            <p>NIP: {nip}</p>
            {phone && <p>Telefon: {phone}</p>}
            <p>Rola użytkownika: {roles}</p>
            <Link to="/">
                <Button>Edytuj</Button>
            </Link>
            <Button>Potwierdź</Button>
        </Wrapper>
    )
}

ConfirmRegister.propTypes = {}

export default ConfirmRegister
