import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './styleCard.css'
import { Link } from "react-router-dom";

function index() {
  return (
    <CardGroup>
  <Card>
    <Link to= '/CloneWars'> <Card.Img variant="top" src="https://wallpapercave.com/wp/wp7465668.jpg" /> </Link>
    <Card.Body>
      <Card.Title style={{textAlign: 'center'}}>The Clone Wars</Card.Title>
      <Card.Text style={{textAlign: 'center'}}>Start to watch the biggest Star Wars series </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Link to= '/BobaFett'> <Card.Img variant="top" src="https://lumiere-a.akamaihd.net/v1/images/boba_ka_ff676bed.jpeg" /> </Link>
    <Card.Body>
      <Card.Title style={{textAlign: 'center'}}>The Book of Boba Fett</Card.Title>
      <Card.Text style={{textAlign: 'center'}}>Watch now the season 01</Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Link to='/Obiwan'> <Card.Img variant="top" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9678FC74FB52573A4F9E8CFEB7E05C930094B1590C1175C530B014E14AA19434/scale?width=1200&aspectRatio=1.78&format=jpeg" /> </Link>
    <Card.Body>
      <Card.Title style={{textAlign: 'center'}}> Obi-wan Kenobi </Card.Title>
      <Card.Text style={{textAlign: 'center'}}>Enjoy with this new Star Wars series</Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
  )
}

export default index