import React from "react";
import { List, ListItem, ListItemText, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const UserList: React.FC = () => {
    const usersList = useSelector((state: RootState) => state.users);

    return (
        <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                User List
            </Typography>
            <List>
                {usersList.map((user, index) => (
                    <ListItem key={index} divider>
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
