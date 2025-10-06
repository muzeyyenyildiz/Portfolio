import {
    Container,
    Row,
    Col,
    ListGroup,
    Badge,
} from 'react-bootstrap';

import { LanguageContent, UILanguage } from './types';

const AboutSection = ({ content, texts }: { content: LanguageContent, texts: UILanguage }) => (

    <section id="about" className="py-5 mx-auto w-100vh container">
        <Container>
            <h2 className="display-5 fw-bold text-center mb-4">{texts.titles.about}</h2>
            <hr className="w-25 mx-auto border-primary mb-5" />
            <Row className="justify-content-center">
                <Col lg={10}>
                    <p className="fs-5 text-dark mb-4 text-center">
                        {content.summary2}
                    </p>
                    <h4 className="mt-5 mb-3 text-primary fw-bold">{texts.titles.education}</h4>
                    <ListGroup variant="flush" className="shadow-sm">
                        {content.education.map((edu, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-0">{edu.degree}</h5>
                                    <small className="text-muted">{edu.school}</small>
                                </div>
                                <Badge bg="secondary">Graduated</Badge>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <div className="mt-4 text-center">
                        <h5 className="mb-0 mt-3 fw-bold">{texts.locationText}</h5>
                        <p className="text-muted">{content.contact.location}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutSection