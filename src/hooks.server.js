// import mongoose from 'mongoose';
// import { MONGO_URL } from  '$env/static/private';


// mongoose.connect(MONGO_URL, () => {
//     console.log('Connected To Databse')
// })



// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })


// const User = mongoose.model("UserModel", userSchema)


// async function createUser() {
//     const user = await User.create({
//         name: "dandy",
//         age: 23
//     });
//     await user.save()
//     console.log("User Saved")
// }

// createUser()