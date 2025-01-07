import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

export const sendReservationEmail = async (name, email, date, timeSlot) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send confirmation to the user
        subject: 'Reservation Confirmation',
        text: `Hello ${name},\n\nYour reservation has been confirmed!\n\nDetails:\nDate: ${date}\nTime Slot: ${timeSlot}\n\nThank you!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}; 