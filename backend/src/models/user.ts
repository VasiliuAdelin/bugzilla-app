import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

const Fact = mongoose.model('User', userSchema);
export default Fact;