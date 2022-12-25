let lastActionStorageKey = 'lastAction';

/**
 * @returns {object} save, load
 */
export function useLastActionStorage() {
	/**
	 * @param {*} data
	 */
	function setLastAction(data) {
		localStorage.setItem(lastActionStorageKey, JSON.stringify(data));
	}

	/**
	 * @returns {object} lastAction
	 */
	function getLastAction() {
		let lastAction = JSON.parse(localStorage.getItem(lastActionStorageKey));
		if (!lastAction) {
			lastAction = [];
		}
		return lastAction;
	}

	return [getLastAction, setLastAction];
}

// function historyStorage() {
// 	let historyStorageKey = 'history';

// 	function save(data) {
// 		let history = JSON.parse(localStorage.getItem(historyStorageKey));
// 		if (!history) {
// 			history = [];
// 		}
// 		history.push(data);
// 		localStorage.setItem(historyStorageKey, JSON.stringify(history));
// 	}

// 	function load() {
// 		let history = JSON.parse(localStorage.getItem(historyStorageKey));
// 		if (!history) {
// 			history = [];
// 		}
// 		return history;
// 	}
// }
