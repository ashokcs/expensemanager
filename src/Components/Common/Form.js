import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <div>
            <h2 id="title">Expense Manager App</h2>
            <div className="heading-container">
                <h3 id="login">
                    User {title}
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Email id"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p></p>
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

            <Button title={title} handleAction={handleAction}/>
        </div>
    );
}
