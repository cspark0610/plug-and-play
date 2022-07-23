import { createContext, useState } from "react";
import { getItems, removeAllHats, updateHatsPrice } from "../data/store";

/*
{
  "red_hat": {
    "id": "red_hat",
    "name": "Red Hat",
    "tags": ["red", "hat", "clothing"],
    cost: 10
  }
}
*/

// lo consume el ItemList
export const AppStateContext = createContext({});
// lo usa el ItemCreate
export const AppSetStateContext = createContext();

const AppStateProvider = ({ children }) => {
	const [items, setItems] = useState(getItems());

	const addItem = (item) => {
		setItems([...items, item]);
	};

	const removeItem = (id) => {
		const copy = [...items];
		const newItems = copy.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const updateItem = (updatedItem) => {
		setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
	};

	const updateHats = () => {
		const updated = updateHatsPrice();
		const removedHats = removeAllHats();
		setItems([...removedHats, ...updated]);
	};

	return (
		<AppStateContext.Provider value={items}>
			<AppSetStateContext.Provider value={{ addItem, removeItem, updateItem, updateHats }}>
				{children}
			</AppSetStateContext.Provider>
		</AppStateContext.Provider>
	);
};

export default AppStateProvider;
