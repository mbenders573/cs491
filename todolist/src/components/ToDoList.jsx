import React, { useState } from 'react';
import '../App.css';
import { Button, Form, ListGroup } from 'react-bootstrap';

const ToDoList = () => {
    const [task, setTask] = useState("");
    const [displayTasks, setDisplayTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        if (task !== "") {
            setDisplayTasks([...displayTasks, task]);
            setTask("");
        }
    }

    const deleteTask = (index) => {
        const tasks = [...displayTasks];
        tasks.splice(index,1);
        setDisplayTasks(tasks);
    }

    return (
        <>
            <Form className = "mt-5" onSubmit = {addTask}>
                <Form.Group className = "d-flex gap-2">
                    <Form.Control type = "text" placeholder="Enter a task" value = {task} onChange = {(e) => setTask(e.target.value)} />
                    <Button variant="primary" onClick={addTask} >+</Button>
                </Form.Group>
            </Form>
            <ListGroup className = "mt-3 stylingform">
                {displayTasks.map( (task,index) => <ListGroup.Item variant = "secondary" key = {index} action onClick = {() => deleteTask(index)}>{task}</ListGroup.Item> )}
            </ListGroup>
        </>
    );
};

export default ToDoList;