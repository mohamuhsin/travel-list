/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TravelContext = createContext({
    items: [],
    addItem: (item) => { },
    deleteItem: (id) => { },
    toggleItem: (id) => { },
    clearList: () => { },
});

function travelReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        return [...state, action.item];
    }

    if (action.type === "DELETE_ITEM") {
        return state.filter((item) => item.id !== action.id);
    }

    if (action.type === "TOGGLE_ITEM") {
        return state.map((item) =>
            item.id === action.id ? { ...item, packed: !item.packed } : item
        );
    }

    if (action.type === "CLEAR_LIST") {
        return [];
    }

    return state;
}

export default function TravelContextProvider({ children }) {
    const [travelState, dispatchCartActions] = useReducer(travelReducer, []);

    function addItem(item) {
        dispatchCartActions({
            type: "ADD_ITEM",
            item,
        });
    }

    function deleteItem(id) {
        dispatchCartActions({
            type: "DELETE_ITEM",
            id,
        });
    }

    function toggleItem(id) {
        dispatchCartActions({
            type: "TOGGLE_ITEM",
            id,
        });
    }

    function clearList() {
        const confirmed = window.confirm(
            "Are you sure you want to clear the list?"
        );

        if (confirmed) {
            dispatchCartActions({
                type: "CLEAR_LIST",
            });
        }
    }

    const travelCtx = {
        items: travelState,
        addItem,
        deleteItem,
        toggleItem,
        clearList,
    };

    return (
        <TravelContext.Provider value={travelCtx}>
            {children}
        </TravelContext.Provider>
    );
}
