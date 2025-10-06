import {
    Container,
    Row,
    Col,
    Badge,

} from 'react-bootstrap';
import { LanguageContent, UILanguage } from './types';

const SkillsSection = ({ content, texts }: { content: LanguageContent, texts: UILanguage }) => (
    <section id="skills" className="py-5 bg-light">
        <Container>
            <h2 className="display-5 fw-bold text-center mb-4">{texts.titles.skills}</h2>
            <hr className="w-25 mx-auto border-primary mb-5" />
            <Row>
                <Col lg={10} className="mx-auto text-center">
                    <div className="d-flex flex-wrap justify-content-center">
                        {content.skills.map((skill, index) => (
                            <Badge key={index} pill bg="dark" className="m-2 p-3 fs-6">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default SkillsSection