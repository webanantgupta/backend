const mongoose = require('mongoose');

const connectTodb = () => {
   mongoose.connect('mongodb://localhost:27017/NoteApp')
   .then(() => console.log('connected to mongodb successful'))
   .catch(() => console.log('error in connecting to mongodb'))
}

module.exports = connectTodb;