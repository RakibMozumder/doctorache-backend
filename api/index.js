const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');

const appointmentRoutes = require('../routes/appointment.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://user1:oupbYmnhz5hyhcvR@cluster0.hrvzl9s.mongodb.net/doctorache?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

// Routes
app.use('/api/appointments', appointmentRoutes);

// Export for Vercel
module.exports = serverless(app);



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// const appointmentRoutes = require('./routes/appointment.routes');
// app.use('/api/appointments', appointmentRoutes);

// // Connect MongoDB and start server
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('✅ MongoDB connected');
//     app.listen(5000, () => console.log('🚀 Server running on port 5000'));
//   })
//   .catch(err => console.error('❌ MongoDB connection error:', err));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// const appointmentRoutes = require('./routes/appointment.routes');
// app.use('/api/appointments', appointmentRoutes);

// // MongoDB URI and Port (hardcoded)
// const PORT = 5000;
// const MONGO_URI = 'mongodb+srv://user1:oupbYmnhz5hyhcvR@cluster0.hrvzl9s.mongodb.net/doctorache?retryWrites=true&w=majority&appName=Cluster0';

// // Connect to MongoDB and start server
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('✅ MongoDB connected');
//   app.listen(PORT, () => {
//     console.log(`🚀 Server is running on http://localhost:${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error('❌ MongoDB connection error:', err.message);
// });

