import { TableDom } from './dom.js';
import { TableStorage } from './storage.js';
import { TableMutation } from './mutation.js';
import { TableGeneration } from './generation.js';

// button event listener -> mutation -> dom -> storage
// button event listener -> format -> dom -> storage

export function NewTable(tableDomId, localStorageKey, defaultTable) {
	let dom = TableDom(tableDomId);
	let storage = TableStorage(localStorageKey, defaultTable);
	let mutation = TableMutation(dom, storage).mutate;
	let generate = TableGeneration(dom, storage);

	/**
	 * Load table data from local storage.
	 */
	dom.fromJson(storage.load(defaultTable));

	return {
		mutate: mutation,
		generate: generate
	};
}
