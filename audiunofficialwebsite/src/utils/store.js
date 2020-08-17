import React, { createContext, useReducer } from 'react';

const initialState = { loggedIn: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'login':
				const newState = { loggedIn: true };
				return newState;
			case 'logout':
				const newStatea = { loggedIn: false };
				return newStatea;
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
