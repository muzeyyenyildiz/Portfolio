import {
    Container,
    Row,
    Col,
    ListGroup,
    Badge,
    Accordion,
} from 'react-bootstrap';
import { LanguageContent, UILanguage } from './types';

const ExperienceSection = ({ content, texts }: { content: LanguageContent, texts: UILanguage }) => (
    <section id="experience" className="py-5">
        <Container>
            <h2 className="display-5 fw-bold text-center mb-4">{texts.titles.experience}</h2>
            <hr className="w-25 mx-auto border-primary mb-5" />
            <Row className="justify-content-center">
                <Col lg={10}>
                    {content.experience.map((job, index) => (
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{job.title}{' '} / {' '} {job.time}</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush" className="mb-3">
                                        {job.tasks.map((task, idx) => (
                                            <ListGroup.Item key={idx} className="border-0 ps-0">
                                                - {task}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                    <div className="mt-3">
                                        <h6 className="fw-bold">{texts.titles.technologiesUsed}</h6>
                                        {job.technologies.map((tech, idx) => (
                                            <Badge key={idx} bg="info" className="me-2 mb-1 p-2">{tech}</Badge>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </Col>
            </Row>
        </Container>
    </section>
);

export default ExperienceSection
