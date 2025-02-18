

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const app = express();

// // Middleware setup
// app.use(cors());
// app.use(bodyParser.json()); // to parse incoming JSON data

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/user?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // User registration route
// app.post('/api/register', async (req, res) => {
//   try {
//     const { fullname, email, mobile, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ fullname, email, mobile, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // User login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Server listening
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// Import required modules
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// require('dotenv').config(); // Add this line to load environment variables from .env file

// const app = express();

// // Middleware setup
// app.use(cors());
// app.use(bodyParser.json()); // to parse incoming JSON data

// // MongoDB Atlas connection using environment variable
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // User registration route
// app.post('/api/register', async (req, res) => {
//   try {
//     const { fullname, email, mobile, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ fullname, email, mobile, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // User login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Root route to test if the server is up
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// // Define the port, with fallback to 5000
// const port = process.env.PORT || 5000;  // Ensure that the port variable is properly defined

// // Server listening
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const app = express();

// // Middleware setup
// app.use(cors());
// app.use(bodyParser.json()); // to parse incoming JSON data

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/user?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   mobile: { type: String, required: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // User registration route
// app.post('/api/register', async (req, res) => {
//   try {
//     const { fullname, email, mobile, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ fullname, email, mobile, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // User login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Server listening
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

require('dotenv').config(); // Add this at the top of your file to load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // to parse incoming JSON data

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// User registration route
app.post('/api/register', async (req, res) => {
  try {
    const { fullname, email, mobile, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullname, email, mobile, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// User login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Server listening
const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
