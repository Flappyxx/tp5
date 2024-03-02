import {Book} from "./schema.js"
import {connectDB,disconnectDB} from "./config.js";

export const addOuvrageBD = async(title, author, description, format) => {
    try{
        await connectDB()
        const book = new Book({title,author,description,format})
        await book.save()
        await disconnectDB()
    }
    catch(e){
        throw e;
    }
}

export const getOuvrageBD = async() => {
    try{
        await connectDB()
        const res = await Book.find({}).limit(20);
        await disconnectDB()
        return res;
    }
    catch(e){
        throw e;
    }
}

export const updateOuvrageBD = async(title, author, description, format)=>{
    try{
        await connectDB()
        if(author){
            await Book.updateOne({title:title},{author:author}).exec()
        }
        if(description){
            await Book.updateOne({title:title},{description:description}).exec()
        }
        if(format){
            await Book.updateOne({title:title},{format:format}).exec()
        }
        await disconnectDB()
    }
    catch(e){
        throw e;
    }
}

export const deleteOuvrageBD = async (title) => {
    try{
        await connectDB()
        await Book.deleteOne({title:title}).exec();
        await disconnectDB()
    }
    catch(e){
        throw e;
    }
}