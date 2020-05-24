import React from 'react';

import  {Component} from 'react';

import axios from 'axios';
import logo from './logo.svg';

import './App.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

class App extends Component {
    state = {
        tname: '',
        email: '',
        company: '',
		country: '',
		pass: '',
		cpass: '',
        emailStatus: ''
    };


    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }
	
	 // when submit btn is clicked
    submitForm = (e) => {
        const {tname, email, company, country, pass, cpass} = this.state;


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + email + 
                                '&name=' + tname + 
                                '&message=' + company);
        // send the request
        xhr.send();

        // reset the fields
        this.setState({
            tname: '',
            email: '',
            company: '',
		    country: '',
		    pass: '',
		    cpass: ''
        });
        e.preventDefault();
    }

    render(){
        const {tname, email, company, country, pass, cpass, emailStatus} = this.state;

  return (
 
 <Col className="app-body"> 
 <Tab.Container id="left-tabs-example" defaultActiveKey="link-1">
  <Container>
   <Nav variant="tabs" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="dashbaord"> <i class="fa fa-anchor" aria-hidden="true"></i> Dashboard </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"><i class="fa fa-television" aria-hidden="true"></i> Website </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"> <i class="fa fa-pencil"></i>  Template </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" disabled>
       <i class="fa fa-question" aria-hidden="true"></i> Help
    </Nav.Link>
  </Nav.Item>
</Nav>
   
      <Tab.Content className="text-tab-content">
	  
	  
		
        <Tab.Pane eventKey="link-1">
          <Breadcrumb className="st-breadcrumb">
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
     Website
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
 <Col className="form-head-title justify-content-center"> 
  
  <h2 className="d-flex">     <img src="user.png"/> &nbsp;   New Team </h2>
  
     
 </Col>
 
 <Form  action="#" method="post" className="bt-form">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Team Name</Form.Label>
      <Form.Control type="text"  value={tname} onChange={this.handleCHange('tname')}   placeholder="Enter Team Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Primary Email</Form.Label>
      <Form.Control type="email" value={email} onChange={this.handleCHange('email')} placeholder="Email" />
    </Form.Group>
  </Form.Row>

 

 
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Company Name</Form.Label>
      <Form.Control  type="text" value={company} onChange={this.handleCHange('company')} placeholder="Enter company name"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Country</Form.Label>
      <Form.Control as="select" value={country} onChange={this.handleCHange('country')}>
        <option>Choose...</option>
        <option>India</option>
		<option>Other</option>
      </Form.Control>
    </Form.Group>

   
  </Form.Row>

   <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="Password" value={pass} onChange={this.handleCHange('pass')} placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" value={cpass} onChange={this.handleCHange('cpass')} placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Col className="text-right pr-0 form-subbtn"> 
  <Button name="submit"   variant="success" type="submit"  onSubmit={this.submitForm}>
  
      <i class="fa fa-plus"> </i>   Add
  </Button>
  
  </Col>
</Form>
        </Tab.Pane>
        <Tab.Pane eventKey="link-2">
          dwivedi
        </Tab.Pane>
      </Tab.Content>
  
  </Container>
</Tab.Container>

</Col>

  );
}

}

export default App;
