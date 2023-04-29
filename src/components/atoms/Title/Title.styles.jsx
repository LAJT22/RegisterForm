import styled from 'styled-components'

export const StyledH1 = styled.h1`
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    color: black;
    position: relative;
    padding: 5px;
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    &::after {
        content: '';
        background-color: red;
        bottom: 0;
        height: 2px;
        left: 0;
        position: absolute;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.25s ease-out;
        width: 100%;
    }
`
