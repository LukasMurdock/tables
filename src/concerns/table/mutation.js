import { useLastActionStorage } from './last-action-storage.js';

export function TableMutation(dom, storage) {
	/**
	 * A reducer function to handle saving last dom mutation action to local storage.
	 * @param {string} action
	 */
	function mutate(action) {
		let undoButton = document.getElementById('undoButton');
		let [getLastAction, setLastAction] = useLastActionStorage();
		let lastAction = getLastAction();
		// Undo uses the last action saved to local storage, so we don't want to overwrite it.
		if (action === 'undo') {
			if (lastAction) {
				undoButton.classList.add('hidden');
				dom.fromJson(lastAction.data);
				storage.save(lastAction.data);
			}
			return;
		}

		let lastActionStorageKey = 'lastAction';
		// Get table data and save to local storage before performing action.
		localStorage.setItem(
			lastActionStorageKey,
			JSON.stringify({
				data: dom.toJson(),
				action: action
			})
		);

		undoButton.classList.remove('hidden');
		switch (action) {
			// Alignment
			case 'alignLeft':
				dom.align('left');
				break;
			case 'alignCenter':
				dom.align('center');
				break;
			case 'alignRight':
				dom.align('right');
				break;
			// Insert
			case 'insertRow':
				dom.insertRow();
				break;
			case 'insertColumn':
				dom.insertColumn();
				break;
			// Delete
			case 'deleteRow':
				dom.deleteRow();
				break;
			case 'deleteColumn':
				dom.deleteColumn();
				break;
			case 'resetTable':
				let reset = confirm('Are you sure you want to clear?');
				if (reset) {
					dom.fromJson(storage.defaultTable);
				}
				break;
			default:
				console.log('Action not found');
		}
		storage.save(dom.toJson());
	}

	return {
		mutate: mutate
	};
}
