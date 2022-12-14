import * as mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
  name: String,
  description: String,
  severity: String,
  priority: Number,
  caussingCommit: String,
  resolvingCommit: String,
  userID: String //TODO how to relate tables
});

const Bug = mongoose.model('Bug', bugSchema);
export default Bug;