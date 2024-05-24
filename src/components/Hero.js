import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HeroComponent () {
  return (
    <Container id='about'>
      <Row>
        <Col className='mt-5'>
            <h1 className='text-success text-center' style={{ fontSize: '65px' }}>Islamic Boarding School</h1>
        </Col>
        <Col className='ms-auto'>
        <p className='fs-5' style={{textAlign: 'justify'}}>Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.</p>
        <p className='fs-5' style={{textAlign: 'justify'}}>SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroComponent;
