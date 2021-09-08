const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const apiRouter = require('./routes/index')
app.use(express.Router())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./routes')(app);
app.use('/api', apiRouter)

const PORT = 3456;
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})