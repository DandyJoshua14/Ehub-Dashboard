import { MONGO_URL } from  '$env/static/private';
import * as mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.connect(MONGO_URL, () => {
    console.log('connected to databse')
})

const userSchema = new Schema({
    name: String,
    age: Number
})

const User = mongoose.model("UserModel", userSchema)

async function createUser() {
    try {
        const user = await User.create({
            name: "dandy",
            age: 18
        })
        await user.save()
        console.log(user)
        console.log("User Saved")
    } catch (e) {
        console.log(e.message)
    }
}

createUser()