/*------------------------------------*/
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const publicDirPath = path.join(__dirname, '../public');
const viewsDirPath = path.join(__dirname, '../public/views');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

/*------------------------------------*/

/*------------------------------------*/
app.get('', (req, res) => {
  res.sendFile(path.join(viewsDirPath, './index.html'));
});
/*------------------------------------*/

app.listen(port, () => {
  console.log(`Server is on localhost:${port}`);
});
