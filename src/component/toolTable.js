// src/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../redux/action.js';
import {
    Button,
    TextField,
    Container,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [task, setTask] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    return (
        <Container>
            <TextField
                label="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <ListItemText primary={task.text} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => dispatch(removeTask(task.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TodoList;
