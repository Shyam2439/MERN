const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.o20gkkx.mongodb.net/login?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected");
});

// Define storage for the uploaded images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Save uploaded images to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Add a timestamp to the filename to avoid overwriting
    }
});

// Initialize multer instance with the storage options
const upload = multer({ storage: storage });

// Define user schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model("User", userSchema);

// Define product schema and model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String
});

const Product = mongoose.model("Product", productSchema);


app.post("/uploadProduct", (req, res) => {
    const { name, description, price, category } = req.body;

    const newProduct = new Product({
        name,
        description,
        price,
        category
    });

    newProduct.save((err, product) => {
        if (err) {
            res.status(500).send({ message: "Error uploading product", error: err });
        } else {
            res.status(200).send({ message: "Product uploaded successfully", product: product });
        }
    });
});

// Route to fetch products and login data
app.get("/adminData", async (req, res) => {
    try {
        const products = await Product.find({});
        const users = await User.find({});
        res.status(200).send({ products, users });
    } catch (err) {
        res.status(500).send({ message: "Error fetching data", error: err });
    }
});




// Route for user login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    });
});

// Route for user signup
app.post("/signup", (req, res) => {
    const { name, email, password, role } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password,
                role
            });
            newUser.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Successfully Registered, Please login now." });
                }
            });
        }
    });
});

app.listen(3001, () => {
    console.log("Express server (Web Server) started at port 3001");
});
