const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const cors = require('cors')

dotenv.config({ path: 'backend/config/config.env' });

const connectDatabase = require('./config/db');
connectDatabase();


// Routes 

const item = require('./routes/itemRoutes');



const app = express();
app.use(express.json())
app.use(cors())

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// ----------------------------------
// API Routes
// ----------------------------------
app.use('/api/v1/item', item);

// ----------------------------------
// Express server
// ----------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));