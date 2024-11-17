import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/contact';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received data:', { name, email, message });
  
    try {
      const newContact = new Contact({ name, email, message });
  
      // Ensure the data is being saved
      await newContact.save()
        .then(() => {
          console.log('Contact saved to MongoDB');
          res.status(201).json({ message: 'Contact saved successfully!' });
        })
        .catch(err => {
          console.error('Error saving contact to MongoDB:', err);
          res.status(500).json({ message: 'Error saving contact', error: err.message });
        });
    } catch (error) {
      console.error('Error during save operation:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
