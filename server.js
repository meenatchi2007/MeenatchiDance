const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const signupRouter = require("./Routers/signupRouter");
const contactRouter = require('./Routers/contactRouter');
const adminRouter = require('./Routers/adminRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", signupRouter);
app.use('/api/contacts', contactRouter);
app.use('/api', contactRouter);
app.use('/api/admin', adminRouter);
app.use('/api', adminRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
