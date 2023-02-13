
import Carousel from 'react-bootstrap/Carousel';
import { card } from '../../listProjects';
import CarouselBlockItem from './CarouselBlockItem';


function UncontrolledExample() {
  return (
    <Carousel indicators = {false} className="carousel">
      <Carousel.Item>
        <CarouselBlockItem item={card[0]} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselBlockItem item={card[1]} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselBlockItem item={card[2]} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselBlockItem item={card[3]} />
      </Carousel.Item>
    
    </Carousel>
  );
}

export default UncontrolledExample;