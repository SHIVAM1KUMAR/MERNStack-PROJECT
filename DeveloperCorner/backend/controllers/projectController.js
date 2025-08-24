const Project = require('../models/Project');

const submitProjectRequest = async (req, res) => {
    try {
        const { clientName, email, projectDetails } = req.body;
        const newProject = new Project({ clientName, email, projectDetails });
        await newProject.save();
        res.status(201).json({ message: 'Project request submitted' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting project request' });
    }
};

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};

module.exports = { submitProjectRequest, getProjects };
