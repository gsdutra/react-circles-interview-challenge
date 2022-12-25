import styled from "styled-components";
import { useEffect, useState } from 'react';

export default function Circle(props){
    return(<CircleStyled coords={props.coords}>
    </CircleStyled>)
}

const CircleStyled = styled.div`
    background: yellow;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: fixed;
    border: .5px solid black;
    transform: translate(-50%,-50%);
    left: ${props=>props.coords[0]}px;
    top: ${props=>props.coords[1]}px;
`