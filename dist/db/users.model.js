import mongoose, { model } from 'mongoose';
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
    }
});
var User = model('User', UserSchema);
export default User;
