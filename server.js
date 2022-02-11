const express = require('express');
const path = require('path');
const { upload } = require('./multer');
const { form } = require('./formdata');

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// Passes a single file
app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Single File Upload Success')
})
// Passes multiple files as an array
// upload.array('images', 3) images is the key, 3 is the expected number
app.post('/multiple', upload.array('images', 3), (req, res) => {
  console.log(req.files);
  res.send('Multiple Files Upload Success')
});

app.listen(5000);
