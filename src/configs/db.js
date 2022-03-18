const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://neha:1234@cluster0.tiemy.mongodb.net/database2?retryWrites=true&w=majority"
    )
}

