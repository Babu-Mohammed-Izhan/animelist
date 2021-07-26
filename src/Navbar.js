import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const navbar = ({ handleManga, handleAnime }) => {

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand className="navbar-brand">
                    AnimeList
          </Navbar.Brand>
                <Nav className="justify-content-end" defaultActiveKey="anime">
                    <Nav.Item>
                        <Nav.Link eventKey="anime" onSelect={handleAnime} >Anime</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='manga' onSelect={handleManga} >Manga</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default navbar
