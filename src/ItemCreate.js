import React, { useState } from "react";
import { createItem } from "./data/store";

const ItemCreate = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [tags, setTags] = useState("");
	const [newItem, setNewItem] = useState({});

	const onSubmit = async (event) => {
		event.preventDefault();
		const newItem = createItem(name, tags, price);
		setNewItem(newItem);
		setName("");
		setTags("");
		setPrice(0);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

					<label>Price</label>
					<input value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />

					<label>Tags</label>
					<input value={tags} onChange={(e) => setTags(e.target.value)} className="form-control" />
				</div>
				<button className="btn btn-primary">Create Item</button>
			</form>
		</div>
	);
};

export default ItemCreate;
