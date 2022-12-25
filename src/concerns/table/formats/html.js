function h(string) {
	return string.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n';
}

export function htmlFormat(tableJson) {
	let html = '';
	for (let row of tableJson.data) {
		html += h('<tr>');
		for (let cell of row) {
			html += '\t' + h(`<td>${cell}</td>`);
		}
		html += h('</tr>');
	}
	return html;
}
