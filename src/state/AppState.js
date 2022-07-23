import { createContext, useState } from "react";
import { getItems } from "../data/store";

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
		const newItems = [...items];
		delete newItems[id];
		setItems(newItems);
	};

	const updateItem = (updatedItem) => {
		setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
	};

	return (
		<AppStateContext.Provider value={items}>
			<AppSetStateContext.Provider value={{ addItem, removeItem, updateItem }}>{children}</AppSetStateContext.Provider>
		</AppStateContext.Provider>
	);
};

export default AppStateProvider;
