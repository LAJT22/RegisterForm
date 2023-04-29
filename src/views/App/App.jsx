import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import RegisterForm from '../../components/organisms/RegisterForm/RegisterForm'
import ConfirmRegister from '../ConfirmRegister/ConfirmRegister'
import { Wrapper } from './App.styles'
import { GlobalStyle } from '../../styles/GlobalStyle'

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Wrapper>
                <Routes>
                    <Route exact path="/" element={<RegisterForm />} />
                    <Route
                        exact
                        path="/summary"
                        element={<ConfirmRegister />}
                    />
                </Routes>
            </Wrapper>
        </Router>
    )
}

export default App
