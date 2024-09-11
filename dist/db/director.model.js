import mongoose, { model } from 'mongoose';
var Schema = mongoose.Schema;
export var DirectorSchema = new Schema({
    name: String,
    surname: String,
    bio: String
});
var Director = model('Director', DirectorSchema);
export default Director;
