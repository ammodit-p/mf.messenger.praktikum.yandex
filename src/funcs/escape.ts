export default function escape(string: string): string {
	const htmlEscapes: {[k in string]: string} = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#39;',
	};

	return string.replace(/[&<>"']/g, function(match) {
		return htmlEscapes[match];
	});
}
