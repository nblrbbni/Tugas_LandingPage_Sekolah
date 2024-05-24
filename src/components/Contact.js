import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactComponent () {
  return (
    <>
      <h1 className='text-center mt-5'>Lokasi</h1>
      <Container id='contact'>
        <Row>
          <Col>
            <div class='ratio ratio-16x9'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.242095211202!2d106.68798676328862!3d-6.574538399457455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db2b478d2725%3A0xa31558d4689b78c5!2sSMK%20TI%20BAZMA!5e0!3m2!1sid!2sid!4v1716539053869!5m2!1sid!2sid'></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactComponent
