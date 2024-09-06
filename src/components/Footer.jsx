/* eslint-disable react/prop-types */
export default function Footer({ items }) {
    if (!items.length)
        return (
            <em>
                <p className="stats">Start adding some items in your packing list 🚀</p>
            </em>
        );

    const numOfItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;

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
