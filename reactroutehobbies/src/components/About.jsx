import '../App.css';
import { Container, Card } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <h1>About Me</h1>
            <div className = "text-start">
                <h3>
                    Github:{" "}
                    <a href = "https://github.com/mbenders573" target = "_blank" className = "text-decoration-none">
                        https://github.com/mbenders573
                    </a>
                </h3>
                <h3>
                    Email: mb03756n@pace.edu
                </h3>
                <p>
                    I am Mark, a Senior at Pace. I enjoy puzzles, and math. <br/>
                    Being new to react, I hope to learn a lot while completing the project.
                </p>
            </div>
            
        </>
    );
};

export default About;