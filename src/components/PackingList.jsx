import { useContext } from "react";
import { TravelContext } from "../store/TravelContext";

/* eslint-disable react/prop-types */
export default function PackingList({ item }) {
    const travelCtx = useContext(TravelContext);
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => travelCtx.toggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => travelCtx.deleteItem(item.id)}>❌</button>
        </li>
    );
}
