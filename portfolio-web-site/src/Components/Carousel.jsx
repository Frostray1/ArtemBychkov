
import Carousel from 'react-bootstrap/Carousel';
import { card } from '../listProjects';
import CarouselBlockItem from './CarouselBlockItem';


function UncontrolledExample() {
  return (
    <Carousel indicators = {false} className="carousel">
      <Carousel.Item>
        <CarouselBlockItem item={card[0]} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselBlockItem item={card[1]} />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselBlockItem item={card[2]} />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;