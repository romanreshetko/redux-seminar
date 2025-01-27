import React from "react";
import { List, ListItem, ListItemText, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router";


const UserList: React.FC = () => {
    const usersList = useSelector((state: RootState) => state.users);
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                User List
            </Typography>
            <List>
                {usersList.map((user, index) => (
                    <ListItem key={index} divider onClick={() => navigate(`/user/${index}`)}>
                        <ListItemText
                            primary={user.name}
                            secondary={`Age: ${user.age}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default UserList;
