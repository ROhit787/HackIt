const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongo:mongo@cluster0-4zn27.mongodb.net/test?retryWrites=true&w=majority', { useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./User');