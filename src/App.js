import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container ,  Card  , Row , } from 'react-bootstrap'
import {useState , useEffect} from 'react'




function App() {

  const [picture, setPicture] = useState([])



  useEffect(()=>
  {
    var headersapi = {
      method: 'GET',
 
      Headers: {
        'Content-Type': 'application/json'

      },
    }

    const load = async()=>{
      var pic = await fetch('https://random-d.uk/api/random', headersapi)
      .then(console.log(load))
      .then(Response=>Response.json())
       .then( data => {setPicture(data)})


  }
    load()
  })

return (
    <div className="">
      <Container className='m-auto'>
        <Row className='sm-col-10 md-col-5 justify-content-center h1'>
          <Card className='w-50 mt-5 bg-danger '>
              <Card.Img className='mt-4' src={picture && picture.url} />
                <Card.Body className='m-auto'>
                  <Card.Title className='text-light'>Duck</Card.Title>
                  </Card.Body>
            </Card>
        </Row>

        </Container>

    </div>
  );
}

export default App;
