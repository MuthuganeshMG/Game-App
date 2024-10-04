const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const gameRoutes = require('./routes/gameRoutes');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });


const app = express();
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
connectDatabase();

app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
