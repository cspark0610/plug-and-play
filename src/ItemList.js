import React, { useState, useEffect } from "react";
import { getItems } from "./data/store";

const ItemList = ({ newItem }) => {
	const [formatted, setFormatted] = useState([]);
	useEffect(() => {
		const items = getItems();
		setFormatted(items);
	}, []);

	const renderedItems = formatted.map((item) => {
		return (
			<div className="card" style={{ width: "30%", marginBottom: "20px" }} key={item.id}>
				<div className="card-body">
					<h3>Item Card</h3>
					<p>Name: {item.name}</p>
					<p>Tags: {item.tags.join(", ")}</p>
					<p>Cost: {item.cost}</p>
				</div>
			</div>
		);
	});
	return <div>{renderedItems}</div>;
};

export default ItemList;
