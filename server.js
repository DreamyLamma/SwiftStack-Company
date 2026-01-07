const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Path to your React build folder
const buildPath = path.join(__dirname, 'swiftstack-web', 'build');
app.use(express.static(buildPath));

// API for Contact Us
app.post('/api/contact', (req, res) => {
    console.log("Contact Data:", req.body);
    res.json({ success: true });
});

// SAFE FOR NODE v24: This is a Regex literal.
// It matches everything and bypasses the PathError.
app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 SwiftStack Server is LIVE at http://localhost:${PORT}`);
});