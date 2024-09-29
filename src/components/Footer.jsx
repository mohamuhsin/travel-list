import { useContext } from "react";
import { TravelContext } from "../store/TravelContext";

export default function Footer() {
    const travelCtx = useContext(TravelContext);

    if (!travelCtx.items.length)
        return (
            <em>
                <p className="stats">Start adding some items in your packing list 🚀</p>
            </em>
        );

    const numOfItems = travelCtx.items.length;
    const packedItems = travelCtx.items.filter((item) => item.packed).length;

    const percentage =
        numOfItems > 0 ? Math.round((packedItems / numOfItems) * 100) : 0;

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? (
                    <p>You got everything, ready to go ✈</p>
                ) : (
                    <p>
                        💼 You have {numOfItems} items on your list, and you already packed{" "}
                        {packedItems} ({percentage} %)
                    </p>
                )}
            </em>
        </footer>
    );
}
