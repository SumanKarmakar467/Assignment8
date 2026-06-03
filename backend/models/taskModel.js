const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending'
    },

    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium'
    },

    dueDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('Task', taskSchema);