import mongoose from "mongoose"

const dbURI = "mongodb://127.0.0.1:27017/"
const dbName = "bibliotheque"

export async function connectDB() {
    await mongoose.connect(`${dbURI}${dbName}`)
}

export async function disconnectDB(){
    await mongoose.disconnect();
}
