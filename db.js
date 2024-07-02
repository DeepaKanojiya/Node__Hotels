const mongoose = require("mongoose")


async function main(){
  await mongoose.connect("mongodb://localhost:27017/hotels");
}
main()
.then(()=>{
  console.log("connected mongodb server")
})
.catch((err)=>{
  console.log("connection failed", err);
})


const db = mongoose.connection;

db.on('disconnected', ()=>{
  console.log('Mongodb server disconnected')
})
module.export = db;