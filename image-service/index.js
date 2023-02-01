const express = require('express')
const formidableMiddleware = require('express-formidable');
require('dotenv').config()
const cors = require("cors");
const app = express()
const port = 4040



const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.use(cors());
app.use(formidableMiddleware());

app.get('/', (req, res) => {
    res.send('Hello World picture uploader here!!!')
})

app.post('/upload', async (req, res) => {
    try {
        let pictureToUpload = req.files.file.path;
        const result = await cloudinary.uploader.upload(pictureToUpload, { folder: 'wildcarbon/gooddeals' });
        return res.status(200).json(result);
    } catch (error) {
        console.log(">>>ERROR>>>", error.message)
        return res.status(400).json({ error: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
