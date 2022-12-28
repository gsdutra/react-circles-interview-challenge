import styled from "styled-components";
import { useEffect, useState } from 'react';

import Circle from './Circle.js';
import Buttons from './Buttons.js';


function App() {

	const [mousePos, setMousePos] = useState({});
	const [circlesArray, setCircles] = useState([]);

	useEffect(() => {
	  const handleMouseMove = (event) => {
		setMousePos({ x: event.clientX, y: event.clientY });
	  };
  
	  window.addEventListener('mousemove', handleMouseMove);
  
	  return () => {
		window.removeEventListener(
		  'mousemove',
		  handleMouseMove
		);
	  };
	}, []);

	function addCircle(){
		const tempCircles = [...circlesArray, [mousePos.x, mousePos.y]];
		setCircles(tempCircles);
		//console.log(mousePos);
	}

	return (<>
		<ClickArea onClick={addCircle}>
			{circlesArray.map((coords)=>(
				<Circle coords={coords}/>
			))}
		</ClickArea>
		<Buttons circlesArray={circlesArray} setCircles={setCircles}/>
	</>);
}

export default App;

const ClickArea = styled.div`
	width: 100%;
	height: 90vh;
	background: #505b7a;
`