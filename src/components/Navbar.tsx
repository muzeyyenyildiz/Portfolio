
import {
    Container,
    Navbar,
    Nav,
    Button
} from 'react-bootstrap';

import { LanguageContent, LanguageKey, UILanguage } from './types';


const NavBar = ({ content, texts, toggleLang, lang }: { content: LanguageContent, texts: UILanguage, toggleLang: () => void, lang: LanguageKey }) => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: '10px 0' }}>
        <Container>
            <Navbar.Brand href="#home" className="fw-bold">{content.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* Navigasyon linkleri dinamik olarak değişir */}
                    <Nav.Link href="#about">{texts.nav.about}</Nav.Link>
                    <Nav.Link href="#skills">{texts.nav.skills}</Nav.Link>
                    <Nav.Link href="#experience">{texts.nav.experience}</Nav.Link>
                    <Nav.Link href="#projects">{texts.nav.projects}</Nav.Link>
                    <Nav.Link href="#contact">{texts.nav.contact}</Nav.Link>

                    {/* Dil Değiştirme Butonu */}
                    <Button
                        variant="outline-light"
                        className="ms-3"
                        onClick={toggleLang}
                        size="sm"
                    >
                        {/* Mevcut dil 'en' ise 'TR' göster, değilse 'EN' göster */}
                        {lang === 'en' ? 'TR' : 'EN'}
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar