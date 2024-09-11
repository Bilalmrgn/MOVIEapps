import mongoose, { model } from 'mongoose';
var Schema = mongoose.Schema;
export var MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
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
var Movie = model('Movie', MovieSchema);
export default Movie;
