import React from 'react'
import { roles } from '../../../data/roles'
import Label from '../../atoms/Label/Label'
import Option from '../../atoms/Option/Option'
import Select from '../../atoms/Select/Select'
import { Wrapper } from './RolesField.styles'

const RolesField = ({ label, value, onChange, required, name }) => (
    <Wrapper>
        <Label>{label}</Label>
        <Select
            required={required}
            onChange={onChange}
            name={name}
            value={value}
        >
            <Option value="" hidden>
                Wybierz rolę
            </Option>
            {roles.map((role) => (
                <Option key={role}>{role}</Option>
            ))}
        </Select>
    </Wrapper>
)

export default RolesField
