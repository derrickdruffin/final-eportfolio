const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  tools: {
    type: [String],
    required: [true, 'Tools are required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  image: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);