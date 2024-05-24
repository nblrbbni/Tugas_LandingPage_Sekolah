import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

function NavbarComponent () {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src='https://res.cloudinary.com/dhyq9uts4/image/upload/v1676360444/logo_v09np1.png' height='50px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>Profil Sekolah</Nav.Link>
            <Nav.Link href='#fasilitas'>Fasilitas Sekolah</Nav.Link>
            <Nav.Link href='#contact'>Lokasi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
