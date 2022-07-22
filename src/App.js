import ItemCreate from "./ItemCreate";
import ItemList from "./ItemList";

const App = () => {
	return (
		<div className="container">
			<h1>Create Item</h1>
			<ItemCreate />
			<hr />
			<ItemList />
		</div>
	);
};

export default App;
