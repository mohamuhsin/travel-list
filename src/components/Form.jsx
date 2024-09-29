import { useContext, useState } from "react";
import { TravelContext } from "../store/TravelContext";

export default function Form() {
    const travelCtx = useContext(TravelContext);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        travelCtx.addItem(newItem);

        setDescription("");
        setQuantity(1);
    }

    function handleInputChange(event) {
        setDescription(event.target.value);
    }

    function handleNumChange(event) {
        setQuantity(event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                name="numbers"
                id="numbers"
                value={quantity}
                onChange={handleNumChange}
            >
                {numbers.map((number) => (
                    <option key={number}>{number}</option>
                ))}
            </select>
            <input
                type="text"
                placeholder="item..."
                value={description}
                onChange={handleInputChange}
            />
            <button>Add</button>
        </form>
    );
}
