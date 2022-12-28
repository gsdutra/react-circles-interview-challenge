import styled from "styled-components";
import { useEffect, useState } from 'react';

export default function Buttons(props){

    const [history, setHistory]= useState([]);

    function reset(){
        props.setCircles([]);
    }

    function undo(){
        //const undoCircle = props.circlesArray[circlesArray.length-1];
        //const tempHistory = [...history, undoCircle];
        const tempCirclesArray = [...props.circlesArray];
        tempCirclesArray.splice(-1,1);
        props.setCircles(tempCirclesArray);
    }

    return(<>
        <ButtonsStyled>
            <button onClick={undo}>Undo</button>
            <button>Redo</button>
            <button onClick={reset}>Reset</button>
        </ButtonsStyled>
    </>)
}


const ButtonsStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 10vh;
    bottom: 0px;
    background: #202b4a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        border: none;
        font-size: 30px;
        border-radius: 25px;
        width: 25%;
        height: 50px;
        font-family: 'Poppins', sans-serif;

        
        transition: .2s;
        &:hover{
            transform: scale(1.05);
            transition: .2s;
            cursor: pointer;
        }	
    }
`