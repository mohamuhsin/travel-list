// import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Packing from "./components/Packing";
import TravelContextProvider from "./store/TravelContext";

export default function App() {
  // const [items, setItems] = useState([]);

  // function handleAddItem(item) {
  //   setItems((prevItems) => [...prevItems, item]);
  // }

  // function handleDeleteItem(id) {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }
  return (
    <div className="app">
      <TravelContextProvider>
        <Header />
        <Form />
        <Packing />
        <Footer />
      </TravelContextProvider>
    </div>
  );
}
