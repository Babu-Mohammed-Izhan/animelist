import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

const Navigation = ({ handleManga, handleAnime, setSearch, animedata }) => {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(input);
      setInput("");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand className="navbar-brand">AnimeList</Navbar.Brand>
        <Nav className="justify-content-end" defaultActiveKey="anime">
          <Nav.Item>
            <Nav.Link eventKey="anime" onSelect={handleAnime}>
              Anime
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="manga" onSelect={handleManga}>
              Manga
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <div className="nav">
              <Form.Control
                type="text"
                placeholder={`Search for ${animedata.type} `}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
              />
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
