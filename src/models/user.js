import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  api_token: { type: String, unique: true },
  created_at: Date,
  updated_at: Date,
});

export default mongoose.model('User', userSchema);
