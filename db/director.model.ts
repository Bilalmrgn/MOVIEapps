import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;
export const DirectorSchema = new Schema({
    name: String,
    surname:String,
    bio: String
});
const Director = model('Director', DirectorSchema);
export default Director;