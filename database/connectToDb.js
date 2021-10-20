let mongoose = require('mongoose');
let password = '0644918681';
let connectToDb = (callback)=> {
    mongoose.connect(`mongodb+srv://ali:${password}@marcopolo.g14vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, callback)
}
module.exports = connectToDb;