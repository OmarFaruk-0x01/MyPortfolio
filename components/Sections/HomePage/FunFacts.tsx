const FunFactsSection = () => {
  return (
    <section className="funfacts">
      <div className="section-header">
        <span>Funfacts</span>
      </div>
      <div className="funfacts-content">
        <div className="funfacts-content__item">
          <div className="icon">
            <i className="linecons linecons-heart"></i>
          </div>
          <h3>Happy Clients</h3>
          <span>578</span>
        </div>
        <div className="funfacts-content__item">
          <div className="icon">
            <i className="linecons linecons-clock"></i>
          </div>
          <h3>Working Hours</h3>
          <span>4,780</span>
        </div>
        <div className="funfacts-content__item">
          <div className="icon">
            <i className="linecons linecons-star"></i>
          </div>
          <h3>Awards Won</h3>
          <span>15</span>
        </div>
        <div className="funfacts-content__item">
          <div className="icon">
            <i className="linecons linecons-cup"></i>
          </div>
          <h3>Coffee Consumed</h3>
          <span>1,286</span>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
