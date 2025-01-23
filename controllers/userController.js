const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    console.log("hellooooooooooooooooooooooo")
    const { name, email, phone, password, role } = req.body;
    try {
        console.log("hellooooooo",phone,email)
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email,phone, password: hashedPassword, role });
        res.status(201).json(user);
    } catch (error) {
        console.log("Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        res.status(400).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const user = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};





