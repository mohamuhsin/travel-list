/* eslint-disable react/prop-types */
import PackingList from "./PackingList";
import { TravelContext } from "../store/TravelContext";
import { useContext } from "react";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: true },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function Packaging() {
    const travelCtx = useContext(TravelContext);
    return (
        <div className="list">
            <ul>
                {travelCtx.items.map((item) => (
                    <PackingList item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}
