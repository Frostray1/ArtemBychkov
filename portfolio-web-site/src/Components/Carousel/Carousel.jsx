import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import translationKeys from "../../translations";
import { card } from "../../listProjects";
import Button from "../Button/Button";
import CarouselBlockItem from "./CarouselBlockItem";

function UncontrolledExample() {
  const { t } = useTranslation();
  return (
    <>
      <Carousel indicators={false} className="carousel">
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
        <Carousel.Item>
          <CarouselBlockItem item={card[6]} />
        </Carousel.Item>
      </Carousel>
      <Button  name={t(translationKeys.MINIPROJECTS)} />
    </>
  );
}

export default UncontrolledExample;
