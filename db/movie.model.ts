import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;
export const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title:{
        type: String,
        required: true,
        maxlength: [15, '`{PATH} alanı ({MAXLENGTH}) karakterden küçük olmalıdır.`'],
        minlength: [2, '`{PATH} alanı ({MINLENGTH}) karakterden büyük olmalıdır`']
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    date: {
        type: Date,
        default: Date.now
    },
});
const Movie = model('Movie', MovieSchema);
export default Movie;
