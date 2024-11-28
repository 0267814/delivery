require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyDT4TAwFAxCNwAwn8OPXC35kHZQkuaBdGc');
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
var pages;
var pageName;
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
    
    // var password = req.body.password;
    var user = await User.findOne({email});

    // console.log('JESUCRISTO', email, password);


    if(user){
        return res.status(400).json({message:"Email already corresponds to an account"});
    }
    
    const newUser = new User({
        email:email,
        password:password
    })

    //console.log(newUser);

    const savedUser = await newUser.save();
    res.json(savedUser);
});

app.post('/signIn', async (req, res) => {
    const { email, password } = req.body;
    console.log('sosten la escalera cabron');
    
    var user = await User.findOne({email, password});
    console.log(req.body);
    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ name: 'Invalid email or password' });
    }
});

app.post('/addPost', async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    const newPost = new Post({
        title: title,
        description: description,
    })
    const savedPost = await newPost.save();
    res.json(savedPost);
});

app.post('/chatBot', async (req, res) => {

    console.log('hola 1')
    const userMessage = req.body.message;
    console.log('hola 2')
    
    let chatHistory = 'Eres Amadeus, un ayudante de los usuarios con su salud mental, te encanta ayudar a las personas con temas personales o de situacion que los ponga en tristeza, usas ayudas psicologicas para ayudarlas e intentar hacerlas felices.';
    
    console.log('hola 3')

    if (userMessage.replaceAll(' ', '')) {
        userMessages.push(userMessage);
        console.log('hola 4')

        chatHistory += `Usuario: ${userMessage}\n`;

        const result = await model.generateContent(chatHistory);
        const response = result.response.text();
        console.log('hola 5')

        chatBotMessages.push(`AMADEUS: ${response}\n`);
        chatHistory += `AMADEUS: ${response}\n`;
        console.log('hola 6')

        res.json({
            chatBotMessages,
            userMessages,
            error: false,
            
        });
        
        console.log('hola 7')

    } else {
        res.json({
            chatBotMessages,
            userMessages,
            error: true,
        });
        console.log('hola 7.1')

    }

    console.log('hola fin')

});

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.listen(5000, ()=>{
    console.log("Port 5000");
});