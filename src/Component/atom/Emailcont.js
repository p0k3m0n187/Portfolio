import { Box, TextField, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const textfieldStyle = {
    borderRadius: '5px', // Optional: Round corners for better design
    background: 'white',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    '& .MuiFilledInput-root': {
        backgroundColor: 'white',
    }
}

export default function Emailcont() {
    const formRef = useRef();
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validatePhone = (phone) => {
        const phoneRegex = /^09\d{9}$/; // Starts with 09 and has exactly 11 digits
        return phoneRegex.test(phone);
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 11) value = value.slice(0, 11); // Limit to 11 digits
        setPhone(value);
        setPhoneError(validatePhone(value) ? '' : "Phone must start with '09' and be 11 digits long.");
    };

    function sendEmail(e) {
        e.preventDefault();

        if (!validatePhone(phone)) {
            setPhoneError("Phone must start with '09' and be 11 digits long.");
            return;
        }

        emailjs.sendForm(
            'service_qeyj1in',
            'template_n1e0hxf',
            formRef.current,
            'oJxzgCJo-XufTxdiJ'
        )
            .then((result) => {
                console.log('Application sent successfully', result.text);
                alert('Submitted Successfully!');
                e.target.reset();
                setPhone('');
            })
            .catch((error) => {
                console.error('Failed to send application', error);
                alert('Failed to send application. Please try again later.');
            });
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', mb: 5, }}>
            <Box
                sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '10px',
                    padding: 2,
                    width: '30vw',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                }}
            >
                <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <TextField sx={textfieldStyle} name="name" label="Your Name" variant="filled" required />
                    <TextField
                        sx={textfieldStyle}
                        name="phone"
                        label="Phone Number"
                        variant="filled"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        inputProps={{ maxLength: 11 }}
                        error={!!phoneError}
                        helperText={phoneError}
                    />
                    <TextField sx={textfieldStyle} name="email" label="Your Email" type="email" variant="filled" required />
                    <TextField sx={textfieldStyle} name="message" label="Message Here" multiline rows={4} variant="filled" required />
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                background: "linear-gradient(90deg, #3E41A7 0%, #8E1DA1 100%)",
                                color: "#fff",
                                fontWeight: "bold",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                textTransform: "none",
                                borderRadius: "8px",
                                transition: "all 0.3s ease-in-out",
                                boxShadow: "0px 4px 10px rgba(142, 29, 161, 0.3)",
                                border: "2px solid white",
                                "&:hover": {
                                    background: "linear-gradient(90deg, #8E1DA1 0%, #3E41A7 100%)",
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 6px 14px rgba(142, 29, 161, 0.4)",
                                },

                                "&:active": {
                                    transform: "scale(0.98)",
                                    boxShadow: "0px 3px 8px rgba(142, 29, 161, 0.2)",
                                },
                            }}
                        >
                            Submit Email
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box >
    );
}
