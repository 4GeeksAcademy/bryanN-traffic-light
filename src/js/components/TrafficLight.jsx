import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const TrafficLight = () => {

	const [activelight, setActiveLight] = useState('');

	const getBoxShadow = (color) => {
		if (activelight === color) {
			return `0 0 30px 10px ${color}`;
		}return 'none';
	};

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="bg-dark" style={{ height: '170px', width: '20px' }} />
			<div className="bg-dark d-flex flex-column justify-content-between align-items-center" style={{ height: '350px', width: '120px' }} >
				<button
					onClick={() => setActiveLight("green")}
					className="rounded-circle bg-success mt-3"
					style={{
						width: '90px',
						height: '90px',
						boxShadow: getBoxShadow("green")
					}}>
				</button>
				<button
					onClick={() => setActiveLight("yellow")}
					className="rounded-circle bg-warning"
					style={{
						width: '90px',
						height: '90px',
						boxShadow: getBoxShadow("yellow")
					}}>
				</button>
				<button
					onClick={() => setActiveLight("red")}
					className="rounded-circle bg-danger mb-3"
					style={{
						width: '90px',
						height: '90px',
						boxShadow: getBoxShadow("red")
					}}>
				</button>
			</div>

		</div>
	);
};

export default TrafficLight;