function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // Lógica para agregar un elemento al carrito
      return state + 1;
    case "REMOVE_FROM_CART":
      // Lógica para eliminar un elemento del carrito
      return state - 1;
    case "EMPTY_CART":
      // Lógica para vaciar el carrito
      return (state = 0);
    // Otros casos y acciones
    default:
      return state;
  }
}
