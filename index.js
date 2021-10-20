let app = require('express')();
let cors = require('cors');
let parser = require('body-parser');
const connectToDb = require('./database/connectToDb');
const Job = require('./database/dataModel.js');
let PORT = process.env.PORT || 5000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}))

/// sending data to the db:
app.post('/', (req, res)=> {
    let data = req.body;
    console.log(data);
    connectToDb(console.log('connecting to database'));
    Job.findOneAndReplace({ markedWith: 'donde'}, { data, markedWith: 'donde' })
    .then((updated) => {
        console.log(updated)
    })
    .catch(err=> console.log(err));
})

app.listen(PORT, ()=> {
    console.log('listening...');
})


// getting data from the phone:

app.get('/', (req, res)=> {
    Job.find((found)=>{
        console.log(found);
        res.send(found);
    })
})