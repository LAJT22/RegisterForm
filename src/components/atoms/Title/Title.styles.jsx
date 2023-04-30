import styled from 'styled-components'

export const StyledH1 = styled.h1`
    display: inline-block;
    font-weight: bold;
    margin-bottom: 25px;
    color: #111111;
    position: relative;
    padding: 5px;

    &::after {
        content: '';
        background-color: #0076e8;
        bottom: 0;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`
