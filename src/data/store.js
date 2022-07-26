import * as axios from "axios";

// ITEM DEFINITION
// {
//      ID : {
//               "id": STRING ID,
//               "name": STRING NAME,
//               "tags": ARRAY OF STRING TAGS
//               "cost": INTEGER
//          }
// }
//

export const STORE_ITEMS = [
	{
		shirt_red: {
			id: "shirt_red",
			name: "Red Shirt",
			tags: ["red", "shirt", "clothing"],
			cost: 15,
		},
	},
	{
		shirt_green: {
			id: "shirt_green",
			name: "Green Shirt",
			tags: ["green", "shirt", "clothing"],
			cost: 10,
		},
	},
	{
		shirt_blue: {
			id: "shirt_blue",
			name: "Blue Shirt",
			tags: ["blue", "shirt", "clothing"],
			cost: 12,
		},
	},
	{
		pants_black: {
			id: "pants_black",
			name: "Black Slacks",
			tags: ["black", "pants", "clothing"],
			cost: 10,
		},
	},
	{
		pants_blue: {
			id: "pants_blue",
			name: "Blue Jeans",
			tags: ["blue", "pants", "clothing"],
			cost: 20,
		},
	},
	{
		hat_cowboy: {
			id: "hat_cowboy",
			name: "Cowboy Hat",
			tags: ["white", "hat", "clothing"],
			cost: 10,
		},
	},
	{
		hat_crown: {
			id: "hat_crown",
			name: "Golden Crown",
			tags: ["hat"],
			cost: 50,
		},
	},
	{
		tool_hammer: {
			id: "tool_hammer",
			name: "Hammer",
			tags: ["tool"],
			cost: 20,
		},
	},
	{
		tool_shovel: {
			id: "tool_shovel",
			name: "Shovel",
			tags: ["tool"],
			cost: 30,
		},
	},
	{
		tool_pick: {
			id: "tool_pick",
			name: "Pick",
			tags: ["tool"],
			cost: 40,
		},
	},
	{
		goal_key: {
			id: "goal_key",
			name: "Key",
			tags: ["goal"],
			cost: 100,
		},
	},
	{
		goal_ring: {
			id: "goal_ring",
			name: "Ring",
			tags: ["goal"],
			cost: 200,
		},
	},
];

export function getItems() {
	return STORE_ITEMS.map((item) => {
		const i = Object.values(item);
		return {
			id: i[0].id,
			name: i[0].name,
			tags: i[0].tags,
			cost: i[0].cost,
		};
	});
}

export function deleteAllGoals() {
	const items = getItems();
	return items.filter((item) => !item.id.includes("goal"));
}

export function removeAllHats() {
	const items = getItems();
	return items.filter((item) => !item.id.startsWith("hat"));
}

export function updateHatsPrice() {
	const hatsItems = getItems().filter((item) => item.id.startsWith("hat"));
	return hatsItems.map((item) => {
		const newItem = { ...item, cost: item.cost * 2 };
		return newItem;
	});
}

export function getItemsByTags(tagsArray) {
	const items = getItems();
	return items.filter((item) => item.tags.every((tag) => tagsArray.includes(tag)));
}

export async function checkAvaliability(itemId) {
	const res = await axios.get(`http://pdev-gojiverse.bluegoji.com/stock/${itemId}`);
	if (res.data) return true;
	return false;
}

// id: "shirt_red",
export function getItemById(id) {
	return getItems().find((item) => item.id === id);
}

export function createItem(name, tags, cost) {
	const newItem = {
		id: name.toLowerCase(),
		name: name,
		tags: tags.split(", "),
		cost: cost,
	};
	// STORE_ITEMS.push(newItem);
	return newItem;
}

export function updateItem(id, name, cost) {
	const item = getItemById(id);
	const newItem = {
		id: name.toLowerCase(),
		name: name,
		tags: item.tags,
		cost: cost,
	};
	Object.assign(item, newItem);
	return newItem;
}

export function deleteItem(id) {
	return getItems().filter((item) => item.id !== id);
}
