import React, { useState } from 'react'
import '../App.css';
import { ListGroup } from 'react-bootstrap';

const Hobbies = () => {
    const [hobbyIndex, setHobbyIndex] = useState(null)

    const hobby_list = [
        {
            name: "Running",
            image: "https://picsum.photos/id/241/300/200",
            desc: "Running lets you improve your health, and can clear your mind, since you will be thinking about the pain instead"
        },
        {
            name: "Watching Broadway Plays",
            image: "https://picsum.photos/id/274/300/200",
            desc: "The Book of Mormon is really good, go watch it"
        },
        {
            name: "Cooking",
            image: "https://picsum.photos/id/292/300/200",
            desc: "I don't cook, but my mom likes to"
        },
        {
            name: "Reading",
            image: "https://picsum.photos/id/367/300/200",
            desc: "Reading a nice book which lets you escape into a reality separate from your own is exciting. When I was young, I read a lot"
        }
    ]

    const showInfo = (index) => {
        if (hobbyIndex === index) {
            setHobbyIndex(null);
        }
        else {
            setHobbyIndex(index)
        }

    }

    return (
        <>
            <ListGroup className = "mt-5">
                {hobby_list.map( (hobby,index) => 
                <ListGroup.Item action onClick = {() => showInfo(index)} variant = "secondary" key = {index} className = "mb-4 border border-primary rounded-3">
                    <div className = "d-flex justify-content-between align-items-center">
                        <span className = "pe-3">{hobby.name}</span>
                        <img src = {hobby.image} alt = {hobby.name} className = "ps-3 pe-3 pt-2 pb-2 rounded-pill"/>
                    </div>
                    {hobbyIndex === index && (
                        <div className = "mt-5">
                            <span>{hobby.desc}</span>
                        </div>
                    )}
                </ListGroup.Item> )}
            </ListGroup>
        </>
    );
};

export default Hobbies;