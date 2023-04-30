import React from 'react'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'
import { Wrapper } from '../Field/Field.styles'

const Field = ({
    onChange,
    label,
    type,
    value,
    name,
    id,
    required,
    pattern,
    placeholder,
    title,
}) => (
    <Wrapper>
        <Input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
            placeholder={placeholder}
            title={title}
        />
        <Label name={name} htmlFor={id}>
            {label}
        </Label>
    </Wrapper>
)

export default Field
