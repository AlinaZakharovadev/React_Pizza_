export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      filters: state.filters,
      pizzas: state.pizzas,
    });
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
