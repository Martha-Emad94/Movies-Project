import React from 'react';
import { Navbar, Container, Nav, Form, Button,Row} from 'react-bootstrap';
import image from'../images/image.jpg'
const NavBar=({search})=>{
  const onSearch=(word)=>{
    search(word)
  }
 return(
<Row>
<Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="#" >
              <div className="nav" >
                <a href="/" ><img className="img" src={image}/>
                  <p className="logo ">WATCH IT</p></a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100%' }}
              navbarScroll> 
              </Nav>
              <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e)=>onSearch(e.target.value)} type="text" className="form-control" placeholder="Search" />
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</Row>
 );
}
export default NavBar;