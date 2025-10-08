import React from 'react'
import {
    Container,
    Button,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profileImage from '../assets/profile2.png';
import { LanguageContent } from './types';



const HeroSection = ({ content }: { content: LanguageContent }) => (
    <header id="home" className="hero-bg-custom text-white text-center py-5 mx-auto"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <Container style={{ textAlign: 'center' }}>
            <h1 className="display-3 fw-bold mb-3">{content.name}</h1>
            <div style={{ width: '100%', height: 'auto', alignSelf: 'center' }}>
                <Image
                    src={profileImage} // <-- Use the imported variable here
                    className="img fw-bolder mb-4 text-center"
                    style={{ maxWidth: '300px' }}
                    roundedCircle
                    fluid
                    alt="profession"
                />
            </div>
            <p className="lead fw-bolder mb-4">{content.profession}</p>
            <p className="mx-auto fs-5" style={{ maxWidth: '800px' }}>
                {content.summary}
            </p>
            <div className="mt-5">
                <Button variant="light" href={`https://${content.contact.linkedin}`} target="_blank" className="mx-2 px-4 py-2 fw-bold">
                    LinkedIn
                </Button>
                <Button variant="outline-light" href={`https://${content.contact.github}`} target="_blank" className="mx-2 px-4 py-2 fw-bold">
                    GitHub
                </Button>
            </div>
        </Container>
    </header>
);

export default HeroSection