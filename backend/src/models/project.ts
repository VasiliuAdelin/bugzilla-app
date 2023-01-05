import * as mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  repositoryUrl: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  bugs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bug',
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
