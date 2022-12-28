import styled from "styled-components";
import { useEffect, useState } from 'react';

export default function Buttons(props){

    function reset(){
        props.setCircles([]);
        props.setHistory([]);
    }

    function undo(){
        if (props.circlesArray.length>0){
            const undoCircle = props.circlesArray[props.circlesArray.length-1];
            const tempHistory = [...props.history, undoCircle];
            props.setHistory(tempHistory);

            const tempCirclesArray = [...props.circlesArray];
            tempCirclesArray.splice(-1,1);
            props.setCircles(tempCirclesArray);
        }
    }

    function redo(){
        if (props.history.length>0){
            const tempArr = [...props.circlesArray, props.history[props.history.length-1]];
            props.setCircles(tempArr);
            
            const tempHistory = [...props.history];
            tempHistory.splice(-1,1);
            props.setHistory(tempHistory);
        }
    }

    return(<>
        <ButtonsStyled>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
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
        font-size: 24px;
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