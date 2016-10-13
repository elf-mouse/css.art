const INDEX = 0; // 0 - 4

const TYPES = ['box-shadow/demo', 'box-shadow/hellboy', 'preprocessing/pacwoman', 'preprocessing/mario', 'preprocessing/pikachu'];
const type = TYPES[INDEX];

let styleExt = INDEX === 2 ? 'less' : 'scss';

require('./' + type + '.' + styleExt);
let tpl = INDEX === 4 ? require('./' + type + '.hamlc')() : require('./' + type + '.html');

let app = document.getElementById('app');
app.innerHTML = tpl;
