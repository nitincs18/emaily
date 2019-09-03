const mongoose =require('mongoose');
// const Schema = mangoose.Schema;
const { Schema } =mongoose;

const userSchema =new Schema({
    googleId :String
})

mongoose.model('users',userSchema);