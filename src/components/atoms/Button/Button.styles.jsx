import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: #0076e8;
    font-weight: bold;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    box-shadow: 0px 5px 10px 0px rgba(0, 94, 185, 0.5);
    margin-top: 20px;
    width: 350px;
    height: 45px;
    font-size: 18px;
    cursor: pointer;

    position: relative;
    transition: background-color 0.3s;
    overflow: hidden;
    z-index: 0;

    &:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s;
        z-index: -1;
        background-color: #0163be;
    }

    &:hover:before {
        transform-origin: left;
        transform: scaleX(1);
    }
`
