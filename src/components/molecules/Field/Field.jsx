import React from 'react'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'
import { Wrapper } from '../RolesField/RolesField.styles'

const Field = ({
    onChange,
    label,
    type,
    value,
    name,
    id,
    required,
    pattern,
    minLenght,
    maxLenght,
}) => (
    <Wrapper>
        <Label name={name} htmlFor={id}>
            {label}
        </Label>
        <Input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
            minLenght={minLenght}
            maxLenght={maxLenght}
        />
    </Wrapper>
)

export default Field
