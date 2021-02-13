import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
});      // this is DB field

export default mongoose.model('card', cardSchema);

// RDB : table
// NSQLDB : collection
// SQL pronounciation 씨퀄