const express = require('express');
const app = express();
const port = process.env.PORT || 8080;



const server = app.listen(port, () => {
  console.log(`Server is running on port: ${server.address().port}`);
});

app.set ('view engine', 'pug');
app.set ('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
}
)
;

//path: server.js

