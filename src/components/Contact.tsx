import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { LanguageContent, UILanguage } from './types';

const ContactSection = ({ content, texts }: { content: LanguageContent, texts: UILanguage }) => (
    <section id="contact" className="py-5">
        <Container>
            <h2 className="display-5 fw-bold text-center mb-4">{texts.titles.contactFormTitle}</h2>
            <hr className="w-25 mx-auto border-primary mb-5" />
            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm text-center">
                        <Card.Body>
                            <Card.Title className="text-primary">{texts.titles.email}</Card.Title>
                            <Card.Text>
                                <a href={`mailto:${content.contact.email}`} className="text-decoration-none">{content.contact.email}</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm text-center">
                        <Card.Body>
                            <Card.Title className="text-primary">LinkedIn</Card.Title>
                            <Card.Text>
                                <a href={`https://${content.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{content.contact.linkedin}</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm text-center">
                        <Card.Body>
                            <Card.Title className="text-primary">GitHub</Card.Title>
                            <Card.Text>
                                <a href={`https://${content.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{content.contact.github}</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default ContactSection