/**
 * Creates a table storage object.
 * @param {string} localStorageKey - The key to use for local storage.
 * @returns {object} The table storage object.
 * @property {function} load - Loads table data from local storage.
 * @property {function} destroy - Removes table data from local storage.
 * @property {function} save - Saves the table data to local storage.
 */
function tableStorage(localStorageKey = 'tableData') {
	/**
	 * Loads table data from local storage.
	 * @param {*} fallbackTable - The table to use if no data is found in local storage.
	 * @returns {*} The table data in JSON.
	 */
	function load(fallbackTable = defaultTable) {
		let storedTable = localStorage.getItem(localStorageKey);
		if (storedTable) {
			return JSON.parse(storedTable);
		} else {
			return { data: fallbackTable.data, alignment: fallbackTable.alignment };
		}
	}

	/**
	 * Removes table data from local storage.
	 */
	function destroy() {
		localStorage.removeItem(localStorageKey);
	}

	/**
	 * Saves the table data to local storage.
	 * @param {*} tableData - The JSON table data to save.
	 */
	function save(tableData) {
		localStorage.setItem(localStorageKey, JSON.stringify(tableData));
	}

	return {
		load,
		destroy,
		save
	};
}
