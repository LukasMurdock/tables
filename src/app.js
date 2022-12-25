import { NewTable } from './concerns/table';

let table = NewTable('table', 'tableData', {
	data: [
		['', ''],
		['', ''],
		['', ''],
		['', '']
	],
	alignment: [],
	colMaxChars: []
});

table.generate('markdown');

let tableControls = document.getElementById('table-controls');
let generateOnChange = document.getElementById('generate-on-change');
let tableElement = document.getElementById('table');
let clearStorage = document.getElementById('clear-storage');

// Event listener for clear storage button
clearStorage.addEventListener('click', function (event) {
	let isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) return;
	localStorage.clear();
	location.reload();
});

// Event listener for table input
function inputListener(event) {
	let isInput = event.target.nodeName === 'INPUT';
	if (!isInput) return;
	let generated = document.getElementById('generated');
	let format = generated.getAttribute('format') ?? 'markdown';
	table.generate(format);
}

// Event listener for table controls
tableControls.addEventListener('click', function (event) {
	let isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) return;
	let mutation = event.target.getAttribute('mutation');

	if (mutation) {
		console.log('mutating::', mutation);

		table.mutate(mutation);
		if (generateOnChange.checked) {
			let format = generated.getAttribute('format') ?? 'markdown';
			table.generate(format);
		}
		return;
	}
	let generation = event.target.getAttribute('generation');
	if (generation) {
		return table.generate(generation);
	}
});

let defaultOptions = {
	generateOnChange: false
};

// Save options to local storage
function saveOptions(options) {
	localStorage.setItem('options', JSON.stringify(options));
}

// Load options from local storage
let options = JSON.parse(localStorage.getItem('options')) ?? defaultOptions;

// Set generate on change checkbox from local storage
generateOnChange.checked = options.generateOnChange;

// Add event listener if generate on change
if (options.generateOnChange) {
	tableElement.addEventListener('input', inputListener);
}

// Event listener for generate on change checkbox
generateOnChange.addEventListener('change', function (event) {
	let isCheckbox = event.target.nodeName === 'INPUT';
	if (!isCheckbox) return;
	let generateOnChange = event.target.checked;
	if (generateOnChange) {
		console.log('generate on change');
		saveOptions({ generateOnChange: true });
		tableElement.addEventListener('input', inputListener);
	} else {
		saveOptions({ generateOnChange: false });
		console.log('do not generate on change');
		tableElement.removeEventListener('input', inputListener);
	}
});
