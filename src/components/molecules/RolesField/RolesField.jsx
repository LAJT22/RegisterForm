import React from 'react'
import { roles } from '../../../data/roles'
import Label from '../../atoms/Label/Label'
import Option from '../../atoms/Option/Option'
import Select from '../../atoms/Select/Select'
import { Wrapper } from './RolesField.styles'

const RolesField = ({
    label,
    value,
    onChange,
    required,
    name,
    id,
    placeholder,
}) => (
    <Wrapper>
        <Select
            required={required}
            onChange={onChange}
            name={name}
            value={value}
            placeholder={placeholder}
        >
            <Option value="" hidden disabled></Option>
            {roles.map((role) => (
                <Option key={role} name={name}>
                    {role}
                </Option>
            ))}
        </Select>
        <Label name={name} htmlFor={id}>
            {label}
        </Label>
    </Wrapper>
)

export default RolesField
