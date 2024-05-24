import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function CardComponent () {
  return (
    <>
      <h1 className='text-center mt-5'>Fasilitas Sekolah</h1>
    <Container id='fasilitas' className='mt-3'>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg'
            />
            <Card.Body>
              <Card.Title>Ruang Kelas & LAB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg'
            />
            <Card.Body>
              <Card.Title>Masjid & Aula</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg'
            />
            <Card.Body>
              <Card.Title>Gedung Asrama</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg'
            />
            <Card.Body>
              <Card.Title>Lapangan Olahraga</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default CardComponent;
