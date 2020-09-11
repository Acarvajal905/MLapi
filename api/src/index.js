const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");
//settings
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/mercadolibre'))


app.listen(3001, () => {
    console.log(`Server on port ${3001}`);
});

