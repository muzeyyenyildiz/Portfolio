import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Badge,
} from 'react-bootstrap';
import { LanguageContent, UILanguage } from './types';

const ProjectsSection = ({ content, texts }: { content: LanguageContent, texts: UILanguage }) => (
    <section id="projects" className="py-5 bg-light">
        <Container>
            <h2 className="display-5 fw-bold text-center mb-4">{texts.titles.projects}</h2>
            <hr className="w-25 mx-auto border-primary mb-5" />
            <Row className="g-4">
                {content.projects.map((project, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-primary fw-bold">{project.name}</Card.Title>
                                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                                <div className="mb-3">
                                    {project.technologies.map((tech, idx) => (
                                        <Badge key={idx} bg="success" className="me-2 mb-1 p-2">{tech}</Badge>
                                    ))}
                                </div>
                                <div className='d-flex flex-row gap-2'>
                                    <Button
                                        variant="outline-primary"
                                        href={`https://github.com/muzeyyenyildiz/${project.link}`}
                                        target="_blank"
                                        className="mt-auto "
                                    >
                                        {texts.buttons.viewOnGithub}
                                    </Button>
                                    {project.vercel !== '' && <Button
                                        variant="primary"
                                        href={project.vercel}
                                        target="_blank"
                                        className="mt-auto ml-4"
                                    >
                                        {texts.buttons.viewOnWebsite}
                                    </Button>}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default ProjectsSection;