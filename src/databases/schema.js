import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    format: {
        type: String,
        enum: ['poche', 'manga', 'audio'],
        default: 'poche'
    }
});

export const Book = mongoose.model('Book', bookSchema);