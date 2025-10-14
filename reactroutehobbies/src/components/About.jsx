import '../App.css';
import { Container, Card } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container className = "text-start">
                <Card className = "bg-light">
                    <Card.Body>
                        <Card.Title as = "h1" className = "mb-5">About Me</Card.Title>
                        <h5>
                            Github:{" "}
                            <a href="https://github.com/mbenders573" target="_blank" className="text-decoration-none link-primary">
                                https://github.com/mbenders573
                            </a>
                        </h5>
                        <h5 className="mt-3">Email: mb03756n@pace.edu</h5>
                        <h5 className="mt-3">Discord: markbenders_41919</h5>
                        <p className="mt-4">
                            I am Mark, a Senior at Pace. I enjoy puzzles and math. <br />
                            Being new to React, I hope to learn a lot while completing the project.
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default About;