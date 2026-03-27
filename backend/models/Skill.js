const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['Frontend', 'Backend', 'Tools', 'Design'],
    },
    items: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skill', skillSchema);
