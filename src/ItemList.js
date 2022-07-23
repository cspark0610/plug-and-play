import ItemDelete from "./ItemDelete";
import { AppStateContext } from "./state/AppState";

const ItemList = () => {
	const renderedItems = (state) => {
		console.log(state, "state");
		return state.map((item) => {
			return (
				<div className="card" style={{ width: "30%", marginBottom: "20px" }} key={item.id}>
					<div className="card-body">
						<h3>Item Card</h3>
						<p>Id: {item.id}</p>
						<p>Name: {item.name}</p>
						<p>Tags: {item.tags.join(", ")}</p>
						<p>Cost: {item.cost}</p>
					</div>
					<ItemDelete itemId={item.id} />
				</div>
			);
		});
	};

	return (
		<AppStateContext.Consumer>
			{(state) => {
				return renderedItems(state);
			}}
		</AppStateContext.Consumer>
	);
};

export default ItemList;
