import React from 'react'
import { Carousel } from 'react-bootstrap'
import './styleCar.css';

function index() {
  return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/wallpapers/star-wars-4th-may-kt.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E65BB2DC61117DDBFB75B1F752E41C95602B6AEC391D30F31B5E4961D3C9BB3C/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.artecines.com.br/wp-content/uploads/2016/12/rogue_one_wallpaper__theatrical_poster__by_spirit__of_adventure-dam3ha4.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    );
}

export default index