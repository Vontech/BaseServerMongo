import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  endDate: Date,
  description: String,
  reminders: [Date],
  category: String,
  priority: Number
});

const Tasks = mongoose.model('Task', TaskSchema);

export default Tasks;