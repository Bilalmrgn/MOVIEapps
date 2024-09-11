import mongoose, { model } from 'mongoose';
var Schema = mongoose.Schema;
export var MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    director_id: Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now
    },
});
var Movie = model('Movie', MovieSchema);
export default Movie;
