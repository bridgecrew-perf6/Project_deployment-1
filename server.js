//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname,"./dist/appointments"));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/appointments/'}),
);

// Start the app by listening on the default Heroku PORT
//let port = process.env.PORT || 8080;
//app.listen(port, () => console.log(`this application is running on port no ${port}`));
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });