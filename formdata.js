const FormData = require('form-data');
const fs = require('fs');

let form = new FormData();
form.append( 'image', fs.createReadStream('/images/1644239056926--testimg.jpg'));


// console.log(form);
// module.exports.form = form;
