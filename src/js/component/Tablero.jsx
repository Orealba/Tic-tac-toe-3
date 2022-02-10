import React, { useState } from "react";
import "../../styles/Tablero.css";

const Tablero = () => {
	const [lavieja, setlavieja] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);

	const [turno, setturno] = useState("x");
	const Click = (indice, posicion) => {
		if (lavieja[indice][posicion] == null) {
			lavieja[indice][posicion] = turno;
			if (turno == "x") {
				setturno("o");
			} else {
				setturno("x");
			}
			Winner();
		} else {
			alert("Hey esta posicion ya estaba ocupada");
		}
	};
	const Winner = () => {
		if (
			(lavieja[0][0] == "x" &&
				lavieja[0][1] == "x" &&
				lavieja[0][2] == "x") |
				(lavieja[1][0] == "x" &&
					lavieja[1][1] == "x" &&
					lavieja[1][2] == "x") ||
			(lavieja[2][0] == "x" &&
				lavieja[2][1] == "x" &&
				lavieja[2][2] == "x") ||
			(lavieja[0][0] == "x" &&
				lavieja[1][1] == "x" &&
				lavieja[2][2] == "x") ||
			(lavieja[0][2] == "x" &&
				lavieja[1][1] == "x" &&
				lavieja[2][0] == "x") ||
			(lavieja[0][0] == "x" &&
				lavieja[1][0] == "x" &&
				lavieja[2][0] == "x") ||
			(lavieja[0][1] == "x" &&
				lavieja[1][1] == "x" &&
				lavieja[2][1] == "x") ||
			(lavieja[0][2] == "x" &&
				lavieja[1][2] == "x" &&
				lavieja[2][2] == "x")
		) {
			alert("Ganó X");
			setlavieja([
				[null, null, null],
				[null, null, null],
				[null, null, null],
			]);
		} else if (
			(lavieja[0][0] == "o" &&
				lavieja[0][1] == "o" &&
				lavieja[0][2] == "o") ||
			(lavieja[1][0] == "o" &&
				lavieja[1][1] == "o" &&
				lavieja[1][2] == "o") ||
			(lavieja[2][0] == "o" &&
				lavieja[2][1] == "o" &&
				lavieja[2][2] == "o") ||
			(lavieja[0][0] == "o" &&
				lavieja[1][1] == "o" &&
				lavieja[2][2] == "o") ||
			(lavieja[0][2] == "o" &&
				lavieja[1][1] == "o" &&
				lavieja[2][0] == "o") ||
			(lavieja[0][0] == "o" &&
				lavieja[1][0] == "o" &&
				lavieja[2][0] == "o") ||
			(lavieja[0][1] == "o" &&
				lavieja[1][1] == "o" &&
				lavieja[2][1] == "o") ||
			(lavieja[0][2] == "o" &&
				lavieja[1][2] == "o" &&
				lavieja[2][2] == "o")
		) {
			alert("Ganó O");
			setlavieja([
				[null, null, null],
				[null, null, null],
				[null, null, null],
			]);
		} else if (
			lavieja[0][0] != null &&
			lavieja[0][1] != null &&
			lavieja[0][2] != null &&
			lavieja[1][0] != null &&
			lavieja[1][1] != null &&
			lavieja[1][2] != null &&
			lavieja[2][0] != null &&
			lavieja[2][1] != null &&
			lavieja[2][2] != null
		) {
			alert("Empate");
		}
	};

	return (
		<>
			<div className="Tablero">
				<h1>La Vieja de tres en raya</h1>
				{lavieja.map((fila, indice) => (
					<div className="row" id={indice}>
						{fila.map((cuadritos, posicion) => (
							<div
								className="square"
								id={posicion}
								onClick={() => Click(indice, posicion)}>
								{cuadritos}
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default Tablero;
