import * as mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
  name: String,
  description: String,
  severity: String,
  priority: Number,
  caussingCommit: String,
  resolvingCommit: String,
});

const Bug = mongoose.model('Bug', bugSchema);
export default Bug;
