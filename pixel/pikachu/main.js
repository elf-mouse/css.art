require('./main.scss');
let tpl = require('./index.jade')();

let app = document.getElementById('app');
app.innerHTML = tpl;
