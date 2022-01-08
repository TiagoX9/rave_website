import { useState } from 'react'
import { FaTwitter, FaDiscord, FaFileAlt, FaTree, FaCopy, FaFeatherAlt } from 'react-icons/fa';
import { Container, Row, Col, Image, Modal, Accordion, Button } from 'react-bootstrap';
import './App.css';
import raven from './logo_main.png'
import raven2 from './33.png'
import raven3 from './35.png'
import raven4 from './36.png'

const Address = () => {
  const address = 'addr150wst2357qmcln55jrc7akzgndxzved660x6wfeppn9k6vdu6egc9arlzslcg4cc8d3esg8';
  return (
    <div className='copy'>
      <div className='text-center copy-text'>
      <p style={{color: 'white', fontWeight: 'bold', fontSize: '20px'}}>{address}</p>
      </div>
      <Button style={{backgroundColor: '#C999FF'}} onClick={() => {navigator.clipboard.writeText(address)}}>
      <FaCopy  color={'white'} size={36}/>
      </Button>
    </div>
  )
}

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid style={{backgroundColor: '#FA99A2'}}>
       <Row style={{marginTop: 40}} className="justify-content-md-center">
        <Col lg={3} md={3} xs={3} ></Col>
        <Col sm lg={3} md={3} xs={3} className='text-center'>
        <a href='https://twitter.com/Samoyed_ADA' target='_blank' rel="noreferrer"><FaTwitter color={'white'} size={60}/></a>
        </Col>
        <Col sm lg={3} md={3} xs={3} className='text-center'>
        <a href='https://discord.gg/4NJYj2bt7w' target="_blank" rel="noreferrer"><FaDiscord color={'white'} size={60}/></a>
        </Col>
        <Col sm lg={3} md={3} xs={3}></Col>
      </Row>
      <Row style={{marginTop: 60}} className="justify-content-md-center">
        <Col></Col>
        <Col className='text-center'>
        <h1 className="text" style={{marginTop: 20}}>$RAVE</h1>
        <Image style={{margin: 20}} className='main-bird' src={raven}/>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{marginTop: 60, marginBottom: 160}} className="justify-content-md-center">
        <Col className='text-center'>
        <h4 className="text" style={{fontSize: '36px'}}>Ready for RAVEN NFT?</h4>
        </Col>
      </Row>
      <Row style={{marginTop: 60, marginBottom: 160}} className="justify-content-md-center">
        <Col className='text-center'>
          <FaFeatherAlt onClick={handleShow} className='feather' size={60}></FaFeatherAlt>
        <h4 className="text" style={{fontSize: '30px'}}>Feather Requirements</h4>
        </Col>
      </Row>
      <Row style={{marginTop: 40}} className="justify-content-md-center">
      <Col className='text-center'>
        <Image className='all-birds' src={raven2}/>
        </Col>
        <Col className='text-center'>
        <Image className='all-birds' src={raven3}/>
        </Col>
        <Col className='text-center'>
        <Image className='all-birds' src={raven4}/>
        </Col>
      </Row>
      <Row style={{marginTop: 160, marginBottom: 20}} className="justify-content-md-center">
        <Col className='text-center'>
        <h4 className="text" style={{fontSize: '30px'}}>FAQ</h4>
        </Col>
      </Row>
      <Row style={{marginTop: 120, marginBottom: 120}} className="justify-content-md-center">
        <Col xs={12} md={4} className='text-center'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text" style={{fontSize: '20px'}}>What are NFT's?</Accordion.Header>
              <Accordion.Body style={{backgroundColor: '#FA99A2', color: 'white'}}>
                A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a blockchain, a form of digital ledger.[1] NFTs can be associated with reproducible digital files such as photos, videos, and audio. NFTs use a digital ledger to provide a public certificate of authenticity or proof of ownership, but do not restrict the sharing or copying of the underlying digital files. The lack of interchangeability (fungibility) distinguishes NFTs from blockchain cryptocurrencies, such as Bitcoin.
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  </Col>
        <Col xs={12} md={4} className='text-center'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text" style={{fontSize: '20px'}}>How to buy?</Accordion.Header>
              <Accordion.Body style={{backgroundColor: '#FA99A2', color: 'white'}}>
                Send 15000 $RAVE to wallet address in Feather Requirements to win an NFT.
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>        </Col>
        <Col xs={12} md={4} className='text-center'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text" style={{fontSize: '20px'}}>Our Policy</Accordion.Header>
              <Accordion.Body style={{backgroundColor: '#FA99A2', color: 'white'}}>
                A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a blockchain, a form of digital ledger.[1] NFTs can be associated with reproducible digital files such as photos, videos, and audio. NFTs use a digital ledger to provide a public certificate of authenticity or proof of ownership, but do not restrict the sharing or copying of the underlying digital files. The lack of interchangeability (fungibility) distinguishes NFTs from blockchain cryptocurrencies, such as Bitcoin.
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>          </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='text-center'>
          <Modal.Title className="tokenomics w-100" style={{color: 'black'}}>Feather Requirements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>     
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold', marginTop: 20}}>DO NOT SEND FROM AN EXCHANGE
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold', marginTop: 20}}>Must send 15000 $RAVE to win and NFT: 
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{marginTop: 20}}>
                <Address />
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{marginTop: 20}}>Policy ID:
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{marginTop: 20, fontSize: 10}}>dt453be4cee0416456degdgfhsdtr3455562beae8cb04a545er
              </Col>
            </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <footer>
      <Row style={{marginTop: 40, marginBottom: 20}} className="justify-content-md-center">
      <Col className='text-center'>
      <Row style={{marginBottom: 60}}>
        <Col className='text-center'>
        <a className='bottom-social' href='https://twitter.com/Samoyed_ADA' target='_blank' rel="noreferrer"><FaTwitter  color={'white'} size={40}/></a>
        <a className='bottom-social' href='https://discord.gg/4NJYj2bt7w' target="_blank" rel="noreferrer"><FaDiscord color={'white'} size={40}/></a>
        </Col>
        </Row>
        <Row style={{marginBottom: 20}}>
          <Col>
          <Image style={{width: '100px'}} src={raven}/>
          </Col>
        </Row>
        <Row>
        <Col className='text-center'>
        <p className="text" style={{fontSize: '18px'}}>$Rave 2022 | All rights reserved </p>
        </Col>
        </Row>
        </Col>
       
        
      </Row>
      </footer>
    </Container>
  );
}

export default App;
