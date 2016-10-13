const INDEX = 0; // 0 - 3

const TYPES = ['table', 'div', 'self-portrait', 'icon'];
const type = TYPES[INDEX];

require('./' + type + '.scss');
let tpl = require('./' + type + '.html');

let app = document.getElementById('app');
app.innerHTML = tpl;
