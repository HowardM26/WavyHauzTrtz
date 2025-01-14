import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';  
import { Container, Button, Alert } from 'react-bootstrap';

function AlertMessage({ message, variant = "success" }) {  
  const [show, setShow] = useState(true);

  if (show) {  
    return (  
      <div className="App">  
        <Container className="p-4">
          <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{message}</Alert.Heading>  
          </Alert>
        </Container>
      </div>  
    );
  }
  return (
    <>
      <Button className="p-3 m-3" variant="primary" onClick={() => setShow(true)}>
        Order Instructions
      </Button>
    </>
  );
}
// Add PropTypes validation for props
AlertMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that 'message' is a required string
  variant: PropTypes.string.isRequired, // Validate that 'variant' is a string
}

export default AlertMessage;
