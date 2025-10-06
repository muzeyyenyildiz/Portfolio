
import { Container } from 'react-bootstrap';
import { LanguageContent } from './types';

const Footer = ({ content }: { content: LanguageContent }) => (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <p className="mb-0">© {new Date().getFullYear()} **{content.name}** | Frontend Developer Portfolio</p>
            <small className="text-muted">Built with React and React-Bootstrap.</small>
        </Container>
    </footer>
);


export default Footer