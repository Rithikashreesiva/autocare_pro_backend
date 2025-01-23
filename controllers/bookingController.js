const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getBookingCountByDate = async (req, res) => {
    try {
        const { date } = req.query;

        // Count bookings where the date matches
        const count = await Booking.countDocuments({ date: new Date(date) });

        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booking count by date', error: error.message });
    }
};
