import styled from 'styled-components'

export const StyledSelect = styled.select`
    padding: 5px 8px;
    border: 1px solid #999999;
    border-radius: 5px;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    height: 30px;
    width: 250px;
    font-size: 16px;
    &:focus {
        border-bottom: 2px solid #0074d9;
        outline: none;
    }
`
