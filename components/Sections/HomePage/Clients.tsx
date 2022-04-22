import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientsSection = () => {
  return (
    <section className="clients">
      <div className="section-header">
        <span>Clients</span>
      </div>
      <div className="clients-content">
        <Carousel responsive={responsive}>
          <div className="slider-item">
            <img src="/imgs/client-1.png" alt="" />
          </div>
          <div className="slider-item">
            <img src="/imgs/client-2.png" alt="" />
          </div>
          <div className="slider-item">
            <img src="/imgs/client-3.png" alt="" />
          </div>
          <div className="slider-item">
            <img src="/imgs/client-4.png" alt="" />
          </div>
          <div className="slider-item">
            <img src="/imgs/client-5.png" alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
