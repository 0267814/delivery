require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require('@google/generative-ai');
const KEY = process.env.KEY;
const genAI = new GoogleGenerativeAI(KEY);
const cors = require('cors');

const app = express();

const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
        responseMimeType: 'text/plain',
        maxOutputTokens: 1000,
        temperature: 0.05,
    },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
var userMessages = [];
var chatBotMessages = [];

const uri =`mongodb+srv://0264547:PtRTk33hxe3KNT@cluster0.rld85.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
});

app.get('/',(req,res) => {
});

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

app.post('/signUp', async (req, res) => {
    const { email, password } = req.body;
    
    var user = await User.findOne({email});

    if(user){
        return res.status(401).json({message:"Email already in use"});
    }
    
    const newUser = new User({
        email:email,
        password:password
    })

    const savedUser = await newUser.save();
    res.json(savedUser);
});

app.post('/signIn', async (req, res) => {
    const { email, password } = req.body;
    var user = await User.findOne({email, password});

    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

app.post('/addPost', async (req, res) => {
    const { title, description } = req.body;
    const newPost = new Post({
        title: title,
        description: description,
    })
    const savedPost = await newPost.save();
    res.json(savedPost);
});

app.post('/changePassword', async (req, res) => {
    const { password, confirm, email } = req.body;

    if (password !== confirm) {
        return res.status(401).json({ error: 'Passwords do not match' });
    }

    try {
        var user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user = await User.updateOne({ email: email }, {$set: {password}});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/chatBot', async (req, res) => {

    const userMessage = req.body.message;
    
    let chatHistory = 'Eres Amadeus, un ayudante de los usuarios con su salud mental, te encanta ayudar a las personas con temas personales o de situacion que los ponga en tristeza, usas ayudas psicologicas para ayudarlas e intentar hacerlas felices.';
    

    if (userMessage.replaceAll(' ', '')) {
        userMessages.push(userMessage);

        chatHistory += `Usuario: ${userMessage}\n`;

        const result = await model.generateContent(chatHistory);
        const response = result.response.text();

        chatBotMessages.push(`AMADEUS: ${response}\n`);
        chatHistory += `AMADEUS: ${response}\n`;

        res.json({
            chatBotMessages,
            userMessages,
            error: false,
            
        });
        
    } else {
        res.json({
            chatBotMessages,
            userMessages,
            error: true,
        });

    }
});

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.listen(5000, ()=>{
    console.log("Port 5000");
});