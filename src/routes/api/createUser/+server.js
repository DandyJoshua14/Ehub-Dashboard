import mongoose from 'mongoose';
import { MONGO_URL } from  '$env/static/private';
const { Schema } = mongoose;


mongoose.connect(MONGO_URL, () => {
    console.log('Connected To Databse')
})


const userSchema = new Schema({
    name: String,
    age: Number
})


const User = mongoose.model("UserModel", userSchema)


export async function POST() {
    const user = new User({
        name: "dandy",
        age: 18
    });
    await user.save()
    console.log("User Saved")
}