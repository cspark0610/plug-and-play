import React, { useContext } from "react";
import { AppSetStateContext } from "./state/AppState";

const HatsUpdatePrice = () => {
	const setState = useContext(AppSetStateContext);

	const handleUpdateHatsPrice = () => {
		setState.updateHats();
	};
	return (
		<button className="btn btn-primary" onClick={handleUpdateHatsPrice}>
			Double hats price
		</button>
	);
};

export default HatsUpdatePrice;
