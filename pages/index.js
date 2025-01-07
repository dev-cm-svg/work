import React, { useState, useRef } from "react";
import ReservationForm from "../components/ReservationForm";
import MessageForm from "../components/MessageForm";
import {
  Container,
  Typography,
  Button,
  Box,
  ButtonGroup,
} from "@mui/material";

const Home = () => {
  const [selected, setSelected] = useState("message"); // Default to message
  const servicesRef = useRef(null); // Create a ref for the services section
  const contactRef = useRef(null); // Create a ref for the contact section

  const handleToggle = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };
  const scrollToServices = () => {
    if (servicesRef.current) {
      const navbarHeight = document.querySelector('#navbar').offsetHeight;
      const topPosition = servicesRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      const navbarHeight = document.querySelector('#navbar').offsetHeight;
      const topPosition = contactRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "40px 20px",
          borderRadius: "0",
          textAlign: "center",
          mb: 4,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          }}
        >
          Welcome to Site Solution
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          Seamlessly book your web or mobile application needs.
        </Typography>
        <Button variant="contained" color="secondary" onClick={scrollToServices}>
          Get Started
        </Button>
      </Box>

      <Container maxWidth="md" ref={servicesRef}>
        {/* Services Section */}
        <Box sx={{ mt: 15, mb: 15, textAlign: "center" }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 10 }}>
            Our Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              mt: 4,
              mb: 10,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                p: 2,
                m: 1,
                border: "1px solid #1976d2",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
                transition: "transform 0.3s, box-shadow 0.3s", // Transition for hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
                },
              }}
            >
              <Typography variant="h6" component="h4" gutterBottom>
                Make a Website
              </Typography>
              <Typography variant="body1" gutterBottom>
                We create stunning and responsive websites tailored to your
                needs.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                p: 2,
                m: 1,
                border: "1px solid #1976d2",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
                transition: "transform 0.3s, box-shadow 0.3s", // Transition for hover effect
                "&:hover": {
                  transform: "scale(1.05)", // Scale effect on hover
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
                },
              }}
            >
              <Typography variant="h6" component="h4" gutterBottom>
                Make an Application
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our team develops mobile applications that provide a seamless
                user experience.
              </Typography>
            </Box>
          </Box>
          {/* Get in Touch Button */}
          <Box sx={{ mt: 4, mb: 10 }}>
            <Button variant="contained" color="secondary" onClick={scrollToContact}>
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box ref={contactRef} sx={{ mt: 16, textAlign: "center" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Have questions or need assistance? You can reach out by leaving a
            message or by making a reservation.
          </Typography>
        </Box>
        <Box sx={{ mb: 12 }}>
          {/* Toggle Buttons for Message and Reservation */}
          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <ButtonGroup value={selected} exclusive aria-label="text alignment">
              <Button
                value="message"
                aria-label="left aligned"
                onClick={(e) => handleToggle(e, "message")}
                sx={{
                  backgroundColor:
                    selected === "message" ? "primary.main" : "transparent",
                  color: selected === "message" ? "white" : "primary.main",
                  "&:hover": {
                    backgroundColor:
                      selected === "message"
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Leave a Message
              </Button>
              <Button
                value="reservation"
                aria-label="centered"
                onClick={(e) => handleToggle(e, "reservation")}
                sx={{
                  backgroundColor:
                    selected === "reservation" ? "primary.main" : "transparent",
                  color: selected === "reservation" ? "white" : "primary.main",
                  "&:hover": {
                    backgroundColor:
                      selected === "reservation"
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Make a Reservation
              </Button>
            </ButtonGroup>
          </Box>
          {selected === "message" ? <MessageForm /> : <ReservationForm />}
        </Box>
      </Container>
    </>
  );
};

export default Home;
