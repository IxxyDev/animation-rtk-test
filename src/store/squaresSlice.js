import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const getRandomColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const squaresSlice = createSlice({
	name: 'squares',
	initialState: {
		squares: []
	},
	reducers: {
		addSquare: (state) => {
			state.squares.unshift({ id: nanoid(), color: getRandomColor() });
		},
		removeSquare: (state) => {
			state.squares.pop();
		}
	}
});

export const { addSquare, removeSquare } = squaresSlice.actions;
export default squaresSlice.reducer;
