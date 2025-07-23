const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST new appointment
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: '✅ Appointment saved!' });
  } catch (error) {
    console.error('❌ Error saving appointment:', error.message);
    res.status(500).json({ error: 'Failed to save appointment' });
  }
});

// GET all appointments (optional)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

module.exports = router;
