const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();


DB_USERNAME=process.env.DB_USERNAME;
DB_PASSWORD=process.env.DB_PASSWORD;

const db_link=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@bookstore.byf2zpq.mongodb.net/?retryWrites=true&w=majority`;
// mongodb+srv://<db_username>:<db_password>@bookstore.byf2zpq.mongodb.net/

const connectionWithDB=()=>{
    
mongoose
.connect( db_link, { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(db){
    console.log("_DB CONNECTED _");
})
.catch(function(err){
    console.log(err);
})

}

module.exports= connectionWithDB;
