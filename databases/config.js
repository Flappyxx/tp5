import mongoose from "mongoose"

const dbURI = "mongodb://127.0.0.1:27017/"
const dbName = "bibliotheque"

export function connectDB() {
    mongoose.connect(`${dbURI}${dbName}`).then(r => console.log(r))
}