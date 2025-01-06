import dbConnect from '../utils/dbConnect';
import Reservation from '../model/Reservation'; // Import the Reservation model

// API endpoint to handle reservation submissions
export const postReservation = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { date, time } = req.body;

    // Validate input
    if (!date || !time) {
        return res.status(400).json({ error: 'Date and time are required.' });
    }

    try {
        // Connect to MongoDB
        await dbConnect(); 

        // Check if a reservation for the date already exists
        const existingReservation = await Reservation.findOne({ 'reservations': { $exists: true } });

        if (existingReservation) {
            // If it exists, check if the date already has time slots
            if (existingReservation.reservations.has(date)) {
                // Push the new time slot into the existing array
                const existingSlots = existingReservation.reservations.get(date);
                if (!existingSlots.includes(time)) {
                    existingSlots.push(time);
                }
                existingReservation.reservations.set(date, existingSlots);
            } else {
                // If the date does not exist, create a new entry
                existingReservation.reservations.set(date, [time]);
            }
            await existingReservation.save();
            res.status(200).json({ message: 'Reservation updated successfully!' });
        } else {
            // If no reservations exist, create a new one
            const newReservation = new Reservation({
                reservations: new Map([[date, [time]]]),
            });
            await newReservation.save();
            res.status(200).json({ message: 'New reservation saved successfully!' });
        }
    } catch (error) {
        console.error('Error saving reservation:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// API endpoint to get all reservations
export const getAllReservations = async (req, res) => {
    try {
        // Connect to MongoDB
        await dbConnect(); // Connect to the database

        // Fetch the reservation document
        const reservationData = await Reservation.findOne({});

        if (!reservationData) {
            res.status(200).json({});
        }

          // Check if reservations is a Map
          if (reservationData.reservations instanceof Map) {
            // Convert the Map to a plain object
            const allReservations = Object.fromEntries(reservationData.reservations);
            res.status(200).json(allReservations);
        } else {

            return res.status(500).json({ error: 'Invalid reservations format' });
        }
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Handle API requests
export default async function handler(req, res) {
    if (req.method === 'POST') {
        return postReservation(req, res);
    } else if (req.method === 'GET') {
        return getAllReservations(req, res);
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}