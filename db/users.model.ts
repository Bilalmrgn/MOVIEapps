import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        minlength: 5,
    }
});
const User = model('User', UserSchema);
export default User;