import { createStore } from 'redux';

// Initial state
const initialState = {
  tickets: [],
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
