/* eslint-disable react/prop-types */
import PackingList from "./PackingList";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: true },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function Packaging({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <PackingList
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
        </div>
    );
}
