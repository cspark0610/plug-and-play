import React, { useContext } from "react";
import { AppSetStateContext } from "./state/AppState";

const ItemDelete = ({ itemId }) => {
	const setState = useContext(AppSetStateContext);

	const handleDelete = () => {
		setState.removeItem(itemId);
	};

	return (
		<button className="btn btn-primary" onClick={handleDelete}>
			delete item
		</button>
	);
};

export default ItemDelete;
