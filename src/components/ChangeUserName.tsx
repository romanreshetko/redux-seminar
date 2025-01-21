import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../store/slices";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store";

const ChangeUserName: React.FC = () => {
    const [newName, setNewName] = useState('');
    const dispatch = useDispatch();
    const userId = (Number)(useParams().userId)
    const userName = useSelector((state: RootState) => state.users[userId]?.name)
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const handleSubmit = () => {
        if (newName.trim()) {
            dispatch(updateName({index: userId, name: newName}))
            navigate("/")
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
            <Typography variant="h5" gutterBottom>
                Change User {userName} Name
            </Typography>
            <TextField
                fullWidth
                label="New Name"
                value={newName}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: "1rem" }}
            >
                Update Name
            </Button>
        </Container>
    );
};

export default ChangeUserName;
