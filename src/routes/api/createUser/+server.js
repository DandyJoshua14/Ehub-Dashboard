import mongoose from 'mongoose';
const { Schema } = mongoose;



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