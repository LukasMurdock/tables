import { markdownFormat } from './formats/markdown.js';
import { htmlFormat } from './formats/html.js';

export function TableGeneration(dom, storage) {
	return function generate(generation) {
		let tableJson = dom.toJson();
		storage.save(tableJson);
		let generateElement = document.getElementById('generated');
		switch (generation) {
			case 'markdown':
				generateElement.setAttribute('format', 'markdown');
				generateElement.innerHTML = markdownFormat(tableJson);
				break;
			case 'html':
				generateElement.setAttribute('format', 'html');
				generateElement.innerHTML = htmlFormat(tableJson);
				break;
			case 'json':
				generateElement.setAttribute('format', 'json');
				generateElement.innerHTML = JSON.stringify(tableJson, null, 2);
				break;
			default:
				console.log('Action not found');
		}
	};
}
