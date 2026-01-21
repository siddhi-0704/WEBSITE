exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // TEMP (no DB yet)
    return res.status(201).json({
        message: "Signup successful",
        user: {
            username,
            email
        }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }

    return res.json({
        message: "Login successful"
    });
};

