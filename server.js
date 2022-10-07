const express = require('express');
const app = express();
const port = 3000;

app.get('*', (req, res) =>
	res.redirect('https://github.com/scripter4863')
);

app.listen(port, () =>
	console.log(`Bot listening at http://localhost:${port}`)
);