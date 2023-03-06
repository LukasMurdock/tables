const testObject = {
	data: [
		['Let’s get table’n', 'Persist me!'],
		['', ''],
		['', ''],
		['', '']
	],
	alignment: [null, null, null, null]
};

/**
 * Generate markdown table in compact format.
 * @param {*} table - The table data to convert to markdown.
 * @returns {string} The markdown table.
 */
export function markdownFormat(table = testObject) {
	let markdown = '';

	for (let rowIndex = 0; rowIndex < table.data.length; rowIndex++) {
		let cols = table.data[rowIndex];
		for (let columnIndex = 0; columnIndex < cols.length; columnIndex++) {
			let text = cols[columnIndex];
			let paddingRequired = table.colMaxChars[columnIndex] - text.length;
			// if (paddingRequired > 0) {
			// 	text += ' '.repeat(paddingRequired);
			// }
			// markdown += `| ${text} `;
			let align = table.alignment[columnIndex];
			if (align == 'left') {
				if (paddingRequired > 0) {
					text += ' '.repeat(paddingRequired);
				}
				markdown += `| ${text} `;
			} else if (align == 'right') {
				if (paddingRequired > 0) {
					text = ' '.repeat(paddingRequired) + text;
				}
				markdown += `| ${text} `;
			} else {
				let leftPadding = Math.floor(paddingRequired / 2);
				let rightPadding = paddingRequired - leftPadding;
				if (leftPadding > 0) {
					text = ' '.repeat(leftPadding) + text;
				}
				if (rightPadding > 0) {
					text += ' '.repeat(rightPadding);
				}
				markdown += `| ${text} `;
			}
		}
		markdown += '|\n';
		if (rowIndex == 0) {
			for (let columnIndex = 0; columnIndex < cols.length; columnIndex++) {
				let align = table.alignment[columnIndex];

				if (align == 'left') {
					let lines = '-'.repeat(table.colMaxChars[columnIndex] + 1);
					markdown += `|:${lines}`;
				} else if (align == 'right') {
					let lines = '-'.repeat(table.colMaxChars[columnIndex] + 1);
					markdown += `|${lines}:`;
				} else if (align == 'center') {
					let lines = '-'.repeat(table.colMaxChars[columnIndex]);
					markdown += `|:${lines}:`;
				} else {
					let lines = '-'.repeat(table.colMaxChars[columnIndex] + 2);
					markdown += `|${lines}`;
				}
			}
			markdown += '|\n';
		}
	}
	return markdown;
}

function getCompact() {
	let table = document.getElementById('table');
	let rows = table.rows;
	let cols = rows[0].cells;
	let markdown = '';
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < cols.length; j++) {
			let cell = rows[i].cells[j];
			let input = cell.children[0];
			let text = input.value;
			let align = input.getAttribute('align');
			if (align == 'left') {
				markdown += `| ${text}`;
			} else if (align == 'right') {
				markdown += `| ${text} `;
			} else {
				markdown += `| ${text} `;
			}
		}
		markdown += '|\n';
	}
	console.log(markdown);
}
