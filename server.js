//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/appointments'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/appointments/'}),
);

// Start the app by listening on the default Heroku PORT
let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`this application is running on port no ${port}`));
