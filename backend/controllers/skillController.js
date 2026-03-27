const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create/Update skill category
// @route   POST /api/skills
// @access  Private
const createSkill = async (req, res) => {
  try {
    const { category, items } = req.body;
    const skill = await Skill.findOneAndUpdate(
      { category },
      { items },
      { upsert: true, new: true }
    );
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getSkills,
  createSkill,
};
