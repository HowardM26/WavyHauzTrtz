import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useState } from 'react';  
import {Container, Button , Alert} from 'react-bootstrap';  
function AlertMessage() {  
   const [show, setShow] = useState(true)  
if (show){  
  return (  
    <div className="App">  
   <Container className='p-4'>  
   <Alert variant="success" onClose={() => setShow(false)} dismissible >  
   <Alert.Heading>All custom orders should be placed A WEEK in advance, as they come second priority to regular orders,
          especially if they are not on the regular menu for the month</Alert.Heading>  
  
   </Alert>  
</Container>  
    </div>  
  );  
}  
return(  
  <>  
  <Button className='p-3 m-3' variant='primary' onClick={() => setShow(true)}>Show Alert</Button>  
  </>  
)  
}  
export default AlertMessage; 