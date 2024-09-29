import PackingList from "./PackingList";
import { TravelContext } from "../store/TravelContext";
import { useContext, useState } from "react";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: true },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function Packaging() {
    const travelCtx = useContext(TravelContext);

    const [sortBy, setSortBy] = useState("input");

    function handleSort(event) {
        setSortBy(event.target.value);
    }

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = travelCtx.items;
    }

    if (sortBy === "description") {
        sortedItems = travelCtx.items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortBy === "packed") {
        sortedItems = travelCtx.items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <PackingList item={item} key={item.id} />
                ))}
            </ul>

            <div className="action">
                <select value={sortBy} onChange={handleSort}>
                    <option value="input">Sort By Input Order</option>
                    <option value="description">Sort By Description</option>
                    <option value="packed">Sort By Packed Status</option>
                </select>
                <button onClick={travelCtx.clearList}>Clear List</button>
            </div>
        </div>
    );
}
