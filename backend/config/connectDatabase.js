const mongoose = require('mongoose');

const connectDtabase = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((con) => {
            console.log("MongoDB is connect to " + con.connection.host)
        })
        .catch((err) => {
            console.error("Failed to connect to MongoDB", err);
        });
};

module.exports = connectDtabase; 