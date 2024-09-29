
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const express = require('express');

const apiKey = process.env.GEMINI_API_KEY; // Make sure to set this in your .env file
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the generative model
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are Bob from Broke To Boss. Broke To Boss is a website that educates people about personal finance such as credit cards, savings, checkings, budgeting, investment banking, credit scores, and more.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Endpoint to handle chat messages
app.post('/send-message', async (req, res) => {
    const userMessage = req.body.message;
    const chatSession = model.startChat({
        generationConfig,
        history: [{ role: 'user', parts: [{ text: userMessage }] }],
    });

    try {
        const result = await chatSession.sendMessage(userMessage);
        res.json({ response: result.response.text() });
    } catch (error) {
        console.error("Error processing message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
