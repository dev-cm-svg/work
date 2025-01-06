import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    reservations: {
        type: Map, // Use a Map to store key-value pairs
        of: [String], // Each key (date) maps to an array of strings (time slots)
    },
});

// Create a model from the schema
const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);

export default Reservation;