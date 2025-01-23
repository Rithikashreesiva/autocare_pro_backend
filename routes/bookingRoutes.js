const express = require('express');
const {createBooking, getBookings, updateBooking, deleteBooking, getBookingCountByDate} = require('../controllers/bookingController');
const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookings);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);
router.get('/count/date', getBookingCountByDate);

module.exports = router;
