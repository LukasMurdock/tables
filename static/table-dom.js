/**
 * @fileoverview Functions for creating and manipulating the table DOM.
 */

/**
 * Creates a promise from an event.
 * @param {object} item - The item to listen for the event on.
 * @param {string} event - The event to listen for.
 * @returns {Promise} The promise.
 */
function getPromiseFromEvent(item, event) {
	return new Promise((resolve) => {
		const listener = () => {
			item.removeEventListener(event, listener);
			resolve();
		};
		item.addEventListener(event, listener);
	});
}

/**
 * Creates a state object.
 */
function useState(defaultValue = defaultState) {
	let value = defaultValue;

	function getValue() {
		return value;
	}

	function setValue(newValue) {
		value = newValue;
	}

	return [getValue, setValue];
}

/**
 * Creates a reducer.
 * @param {function} reducer - The reducer function.
 * @param {any} initialState - The initial state.
 * @returns {any[]} The state and dispatch function.
 */
function useReducer(reducer, initialState) {
	let [state, setState] = useState(initialState);

	function dispatch(action) {
		setState(reducer(state(), action));
	}

	return [state, dispatch];
}

function tableStateReducer(state, action) {
	switch (action.type) {
		case 'setActiveRow':
			return { ...state, R: action.value };
		case 'setActiveColumn':
			return { ...state, C: action.value };
		case 'reset':
			return defaultState;
		default:
			return state;
	}
}

/**
 * Functions for creating and manipulating the table DOM.
 * @param {string} tableId
 * @param {function} onKeypress - A function to call when a key is pressed in the table.
 * @returns
 */
function tableDom(tableId, options = { onKeypress: () => {}, beforeKeypressAction: () => {} }) {
	let table = document.getElementById(tableId);
	let initialState = { R: 0, C: 0 };
	// let initialHistory = {
	// 	redos: [],
	// 	undos: []
	// };
	// let [actionHistory, updateActionHistory] = useState([]);

	let [tableState, updateTableState] = useReducer(tableStateReducer, initialState);
	// Keypress event listener for 'Enter' and other keys.

	function moveFocusToPreviousColumn() {
		let t = tableState();
		let previousCell = table.rows[t.R].cells[t.C - 1];
		if (previousCell) {
			let previousInput = previousCell.children[0];
			previousInput.focus();
			previousInput.select();
		}
	}

	function moveFocusToNextColumn() {
		let t = tableState();
		let nextCell = table.rows[t.R].cells[t.C + 1];
		if (nextCell) {
			let nextInput = nextCell.children[0];
			nextInput.focus();
			nextInput.select();
		} else {
			// If no next column, create a new column and focus the next input.
			let row = table.rows[t.R];
			let newCell = createCell('');
			row.appendChild(newCell);
			let nextInput = newCell.children[0];
			nextInput.focus();
			nextInput.select();
		}
	}

	function moveToPreviousRow() {
		let t = tableState();
		let previousRow = table.rows[t.R - 1];
		if (previousRow) {
			let previousCell = previousRow.cells[t.C];
			let previousInput = previousCell.children[0];
			previousInput.focus();
			previousInput.select();
		}
	}

	function moveToNextRow() {
		let t = tableState();
		let nextRow = table.rows[t.R + 1];
		if (nextRow) {
			let nextCell = nextRow.cells[t.C];
			let nextInput = nextCell.children[0];
			nextInput.focus();
			nextInput.select();
		} else {
			// If no next row, create a new row and focus the next input.
			let table = target.parentElement.parentElement.parentElement;
			let newRowData = Array(row.children.length).fill('');
			let newRow = createRow(newRowData);
			table.appendChild(newRow);
			let nextCell = newRow.cells[t.C];
			let nextInput = nextCell.children[0];
			nextInput.focus();
			nextInput.select();
		}
	}

	// Keydown event listener for 'Enter' and 'Tab' keys.
	table.addEventListener('keydown', function (event) {
		console.log(event);
		// If the enter key is pressed, focus next row.
		if (event.key === 'Enter') {
			event.preventDefault();
			let target = event.target;
			if (target.tagName === 'INPUT') {
				let row = target.parentElement.parentElement;
				// if shift is pressed, focus previous row
				if (event.shiftKey) {
					moveToPreviousRow();
				} else {
					// If shift key is not pressed, focus next row.

					let nextRow = row.nextElementSibling;

					if (nextRow) {
						// If there is a next row, focus the next input.
						let nextInput = nextRow.children[target.parentElement.cellIndex].children[0];
						nextInput.focus();
						nextInput.select();
					} else {
						// If no next row, create a new row and focus the next input.
						let table = target.parentElement.parentElement.parentElement;
						let newRowData = Array(row.children.length).fill('');
						let newRow = createRow(newRowData);
						table.appendChild(newRow);
						let nextInput = newRow.children[target.parentElement.cellIndex].children[0];
						nextInput.focus();
						nextInput.select();
					}
				}
			}
		} else if (event.key === 'Tab') {
			event.preventDefault();
			// // if shift is pressed, focus previous column
			if (event.shiftKey) {
				// focus previous column
				moveFocusToPreviousColumn();

				// let target = event.target;
				// if (target.tagName === 'INPUT') {
				// 	let row = target.parentElement.parentElement;
				// 	let previousColumn = row.children[target.parentElement.cellIndex - 1];
				// 	if (previousColumn) {
				// 		// If there is a previous column, focus the previous input.
				// 		let previousInput = previousColumn.children[0];
				// 		previousInput.focus();
				// 		previousInput.select();
				// 	}
				// }
			} else {
				// If the tab key is pressed, focus next column.
				let target = event.target;
				if (target.tagName === 'INPUT') {
					let row = target.parentElement.parentElement;
					let nextColumn = row.children[target.parentElement.cellIndex + 1];
					if (nextColumn) {
						// If there is a next column, focus the next input.
						let nextInput = nextColumn.children[0];
						nextInput.focus();
						nextInput.select();
					} else {
						// If no next column, create a new column and focus the next input.
						let table = target.parentElement.parentElement.parentElement;
						let rows = table.children;
						for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
							let row = rows[rowIndex];
							let newCell = createCell('');
							row.appendChild(newCell);
						}
						let nextInput = row.children[target.parentElement.cellIndex + 1].children[0];
						nextInput.focus();
						nextInput.select();
					}
				}
			}
		} else {
			let onKeypress = options.onKeypress;
			if (typeof onKeypress === 'function') {
				onKeypress();
			} else {
				console.error('onKeypress must be a function.');
			}
		}
	});

	/**
	 * Creates a new input element.
	 * @param {string} value - The value to populate the input with.
	 */
	function createInput(value) {
		let input = document.createElement('input');
		function updateSelection(rowIndex, columnIndex) {
			// Update table state
			updateTableState({ type: 'setActiveRow', value: rowIndex });
			updateTableState({ type: 'setActiveColumn', value: columnIndex });
			// Update selected attribute
			let prevInput = document.querySelector(`[selected]`);
			if (prevInput) {
				prevInput.removeAttribute('selected');
			}
			input.setAttribute('selected', 'true');
		}

		input.addEventListener('focus', function (event) {
			let columnIndex = event.target.parentElement.cellIndex;
			let rowIndex = event.target.parentElement.parentElement.rowIndex;
			updateSelection(rowIndex, columnIndex);
		});

		input.addEventListener('click', function (event) {
			let columnIndex = event.target.parentElement.cellIndex;
			let rowIndex = event.target.parentElement.parentElement.rowIndex;
			updateSelection(rowIndex, columnIndex);
		});

		// input.onclick = function (event) {
		// 	let columnIndex = event.target.parentElement.cellIndex;
		// 	let rowIndex = event.target.parentElement.parentElement.rowIndex;
		// 	updateSelection(rowIndex, columnIndex);
		// };
		input.value = value;
		return input;
	}

	function createCell(value) {
		let cell = document.createElement('td');
		cell.appendChild(createInput(value));
		return cell;
	}

	/**
	 * Creates a new table row and adds it to the current row.
	 * @param {string[]} values - The column values to populate the row with.
	 */
	function createRow(values) {
		let row = document.createElement('tr');
		console.log(values);
		for (let colIndex = 0; colIndex < values.length; colIndex++) {
			row.appendChild(createCell(values[colIndex]));
		}
		return row;
	}

	/**
	 * Renders a table from an array of rows.
	 * @param {string[][]} rows - The rows to render.
	 */
	function renderTable(rows) {
		let table = document.getElementById('table');
		for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
			table.appendChild(createRow(rows[rowIndex]));
		}
	}

	function fromJson(json) {
		let table = document.getElementById(tableId);
		table.innerHTML = '';
		for (let i = 0; i < json.data.length; i++) {
			let row = json.data[i];
			let rowElement = document.createElement('tr');
			// let rowAlignmentDirection = json.alignment[i];
			for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
				let cell = document.createElement('td');
				let input = createInput(row[columnIndex]);
				let colAlignmentDirection = json.alignment[columnIndex] ?? 'left';
				input.setAttribute('align', colAlignmentDirection);
				input.classList.add(`text-${colAlignmentDirection}`);
				cell.appendChild(input);
				rowElement.appendChild(cell);
			}

			// for (let key in row) {
			// 	let cell = document.createElement('td');
			// 	let input = createInput(row[key]);
			// 	if (json.alignment[i]) {
			// 		input.setAttribute('align', rowAlignmentDirection);
			// 		input.classList.add(`text-${rowAlignmentDirection}`);
			// 	}
			// 	cell.appendChild(input);
			// 	rowElement.appendChild(cell);
			// }
			table.appendChild(rowElement);
		}
	}

	/**
	 * Converts the table to JSON.
	 * @returns {string} - The JSON representation of the table.
	 */
	function toJson() {
		let table = document.getElementById(tableId);
		let rows = table.rows;
		let json = {
			data: [],
			// Column alignment
			alignment: [],
			// Column max characters
			colMaxChars: Array(rows[0].cells.length).fill(0)
		};
		for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
			let row = rows[rowIndex];
			let rowArray = [];
			for (let columnIndex = 0; columnIndex < row.cells.length; columnIndex++) {
				let cell = row.cells[columnIndex];
				let input = cell.children[0];
				let text = input.value;
				let textLength = text.length;
				colMaxChars = json.colMaxChars[columnIndex] || 0;
				if (textLength > colMaxChars) {
					json.colMaxChars[columnIndex] = textLength;
				}

				rowArray.push(text);
				if (rowIndex === 0) {
					json.alignment.push(input.getAttribute('align') ?? 'left');
				}
			}
			json.data.push(rowArray);
		}
		return json;
		// let cols = rows[0].cells;

		// let json = [];
		// for (let i = 0; i < rows.length; i++) {
		// 	let row = {};
		// 	for (let j = 0; j < cols.length; j++) {
		// 		let cell = rows[i].cells[j];
		// 		let input = cell.children[0];
		// 		let text = input.value;
		// 		let align = input.getAttribute('align');
		// 		row[cols[j].innerText] = text;
		// 	}
		// 	json.push(row);
		// }
		// return json;
	}

	/**
	 * Aligns text in the current column.
	 * @param {string} direction - The direction to align the text (left, right, center).
	 */
	function align(direction) {
		let table = document.getElementById(tableId);
		let C = tableState().C;
		// get all row columns at the columnIndex
		for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
			let row = table.rows[rowIndex];
			let cell = row.cells[C];
			let input = cell.children[0];
			input.setAttribute('align', direction);
			input.classList.remove('text-left');
			input.classList.remove('text-right');
			input.classList.remove('text-center');
			input.classList.add(`text-${direction}`);
		}
	}

	function insertRow() {
		let table = document.getElementById(tableId);
		console.log(tableState());
		let row = table.rows[tableState().R];
		let newRow = createRow(Array(row.children.length).fill(''));
		table.insertBefore(newRow, row);
	}

	function insertColumn() {
		// Insert a new column at the current column index for every row
		let table = document.getElementById(tableId);
		let C = tableState().C;
		for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
			let row = table.rows[rowIndex];
			let cell = createCell('');
			row.insertBefore(cell, row.children[C]);
		}

		// let table = document.getElementById(tableId);
		// let row = table.rows[tableState().R];
		// let newCell = createCell('');
		// row.insertBefore(newCell, row.children[tableState().C]);
	}

	function deleteRow() {
		let table = document.getElementById(tableId);
		let R = tableState().R;
		table.deleteRow(R);
	}

	function deleteColumn() {
		let table = document.getElementById(tableId);
		let C = tableState().C;
		for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
			let row = table.rows[rowIndex];
			row.deleteCell(C);
		}
	}

	return {
		align: align,
		createRow: createRow,
		toJson: toJson,
		fromJson: fromJson,
		renderTable: renderTable,
		insertRow: insertRow,
		insertColumn: insertColumn,
		deleteColumn: deleteColumn,
		deleteRow: deleteRow,
		tableState: tableState
	};
}

// function saveTableToLocalStorage() {
//     let table = document.getElementById('table');
//     let rows = table.rows;
//     let cols = rows[0].cells;
//     let tableData = [];
//     for (let i = 0; i < rows.length; i++) {
//         let row = [];
//         for (let j = 0; j < cols.length; j++) {
//             let cell = rows[i].cells[j];
//             let input = cell.children[0];
//             let text = input.value;
//             row.push(text);
//         }
//         tableData.push(row);
//     }
//     console.log(tableData);
//     localStorage.setItem('tableData', JSON.stringify(tableData));
// }
