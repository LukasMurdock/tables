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

clearStorage.addEventListener('click', function (event) {
	let isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) return;
	localStorage.clear();
	location.reload();
});

function inputListener(event) {
	let isInput = event.target.nodeName === 'INPUT';
	if (!isInput) return;
	let generated = document.getElementById('generated');
	let format = generated.getAttribute('format') ?? 'markdown';
	table.generate(format);
}

// remove event listener from table element

tableControls.addEventListener('click', function (event) {
	let isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) return;
	let mutation = event.target.getAttribute('mutation');

	if (mutation) {
		return table.mutate(mutation);
	}
	let generation = event.target.getAttribute('generation');
	if (generation) {
		return table.generate(generation);
	}
});

generateOnChange.addEventListener('change', function (event) {
	let isCheckbox = event.target.nodeName === 'INPUT';
	if (!isCheckbox) return;
	let generateOnChange = event.target.checked;
	if (generateOnChange) {
		console.log('generate on change');
		tableElement.addEventListener('input', inputListener);
	} else {
		console.log('do not generate on change');
		tableElement.removeEventListener('input', inputListener);
	}
});
