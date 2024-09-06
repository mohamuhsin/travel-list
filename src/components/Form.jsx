export default function Form() {
    const numbers = Array.from({ length: 20 }, (_, index) => index + 1);
    return (
        <form className="add-form">
            <h3>What do you need for your 😍 trip?</h3>
            <select name="numbers" id="numbers">
                {numbers.map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="item..." />
            <button>Add</button>
        </form>
    );
}
