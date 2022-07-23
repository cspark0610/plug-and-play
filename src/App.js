import HatsUpdatePrice from "./HatsUpdatePrice";
import ItemCreate from "./ItemCreate";
import ItemList from "./ItemList";
import AppStateProvider from "./state/AppState";

const App = () => {
	return (
		<AppStateProvider>
			<div className="container">
				<h1>Create Item</h1>
				<ItemCreate />
				<hr />
				<HatsUpdatePrice />
				<hr />
				<ItemList />
			</div>
		</AppStateProvider>
	);
};

export default App;
