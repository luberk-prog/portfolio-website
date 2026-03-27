const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    githubLink: {
      type: String,
    },
    liveDemo: {
      type: String,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    underConstruction: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
