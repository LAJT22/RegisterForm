import styled from 'styled-components'
import { StyledInput } from '../Input/Input.styles'
import { StyledSelect } from '../Select/Select.styles'

export const StyledLabel = styled.label`
    padding: 0.1em;
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #999;
    pointer-events: none;
    transition: 0.2s all ease-in-out;

    ${StyledInput}:focus ~ &,
    ${StyledInput}:not(:placeholder-shown) ~ &,
    ${StyledSelect}:focus ~ &,
    ${StyledSelect}:valid ~ & {
        top: -15px;
        color: #0076e8;
    }
`
