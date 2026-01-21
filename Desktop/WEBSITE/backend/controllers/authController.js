// Temporary in-memory storage (replace with DB later)
let users = [];

// SIGNUP
exports.signupUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ name, email, password });

  res.status(201).json({
    message: "Signup successful",
    user: { name, email }
  });
};

// LOGIN
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    user: { name: user.name, email: user.email }
  });
};
