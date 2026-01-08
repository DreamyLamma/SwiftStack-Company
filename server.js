const express = require('express');
const cors = require('cors'); // You will need to install this
const app = express();
const PORT = process.env.PORT || 5000;

// 1. Enable CORS so your Netlify site can talk to this server
app.use(cors());

// 2. Middleware to parse JSON
app.use(express.json());

// 3. API for Contact Us
app.post('/api/contact', (req, res) => {
    console.log("📩 Received Contact Data:", req.body);

    // In a real app, you'd send an email here.
    // For now, we return success to trigger your React animation.
    res.json({
        success: true,
        message: "Message received by SwiftStack Cloud"
    });
});

// 4. Simple Health Check (Good for Render to see if server is alive)
app.get('/', (req, res) => {
    res.send("SwiftStack Backend is Running...");
});

app.listen(PORT, () => {
    console.log(`-----------------------------------------------`);
    console.log(`🚀 SwiftStack Backend is ACTIVE`);
    console.log(`📡 Internal Port: ${PORT}`);
    console.log(`🔗 Local Link:    http://localhost:${PORT}`);
    console.log(`🌐 Cloud Link:    https://swiftstack-api.onrender.com`);
    console.log(`-----------------------------------------------`);
});