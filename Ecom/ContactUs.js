import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
//import './ContactUs.css'

const ContactUs = () => {
    const form = useRef();
    const [smShow, setSmShow] = useState(false);

    const sendEmail =(e)=> {
      e.preventDefault();
  
      emailjs.sendForm('service_nlrs1ab', 'template_p9j1y3b', form.current, 'QWrSp8K2vWaYVkNsK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand id='logo' href="#home"><span>W</span>eb<span>T</span>v.in</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Show">TvShow</Nav.Link>
        <Nav.Link href="/People">People</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{color:"green"}} closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Thank You !!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Response/Feedback Has Been Successfully Submitted.</Modal.Body>
      </Modal>

    <div id='hero'>
    <form id='form-div' ref={form} onSubmit={sendEmail}>
    <h3>Contact Us</h3>
    <label>Name :</label>
    <input type="text" name="user_name" />
    <label>Email :</label>
    <input type="email" name="user_email" />
    <label>Message :</label>
    <textarea name="message" />
    <input id='btn' type="submit" onClick={() => setSmShow(true)} value="Send" />
  </form>
    </div>

    <footer>
          <p id="footer-logo"><span>W</span>eb<span>T</span>v.in &nbsp;</p>
          <p id="footer-copyright">©Project By Dinesh Patil | Follow Us On Instagram-<a id="footer-id" href="https://www.instagram.com/mr.dinu_patil_07_/" target="_blank">@mr.dinu_patil_07</a></p>
          </footer>
    </div>
  )
}

export default ContactUs
