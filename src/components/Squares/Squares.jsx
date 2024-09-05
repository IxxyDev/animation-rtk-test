import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './Squares.css';
import { addSquare, removeSquare } from '../../store/squaresSlice.js';

const ANIMATION_TIMEOUT_MS = 300;

const Squares = () => {
	const dispatch = useDispatch();
	const squares = useSelector((state) => state.squares.squares);
	const [shouldShift, setShouldShift] = useState(false);

	const handleAdd = () => {
		setShouldShift(true);
		dispatch(addSquare());
	};

	const handleRemove = () => {
		setShouldShift(true);
		dispatch(removeSquare());
	};

	useEffect(() => {
		const timer = setTimeout(() => setShouldShift(false), ANIMATION_TIMEOUT_MS);
		return () => clearTimeout(timer);
	}, [squares]);


	return (
		<div className="container">
			<div className="buttons">
				<button onClick={handleAdd}>Добавить</button>
				<button onClick={handleRemove}>Удалить</button>
			</div>
			<TransitionGroup className="square-list">
				{squares.map((square) => (
					<CSSTransition
						key={square.id}
						timeout={ANIMATION_TIMEOUT_MS}
						classNames="square"
					>
						<div
							className={`square ${shouldShift ? 'shift' : ''}`}
							style={{ backgroundColor: square.color }}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default Squares;
