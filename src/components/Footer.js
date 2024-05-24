import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FooterComponent () {
  return (
    <footer className='bg-light mt-5'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; {new Date().getFullYear()} SMK TI Bazma. All rights
            reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent;
