import {S} from '../types';

export default function escape(string: string): string {
  const htmlEscapes: S = {
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
