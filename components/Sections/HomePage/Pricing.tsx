const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="section-header">
        <span>Hire Me</span>
      </div>

      <div className="pricing-content">
        <div className="pricing-content__item">
          <div className="pricing-content--wrap">
            <div className="type">
              <span>Silver</span>
            </div>
            <div className="amount">
              <span>$65</span>
              <sub>/ mon</sub>
            </div>
            <div className="btn-div">
              <a href="#" className="btn">
                Free Trial
              </a>
            </div>
            <ul className="services-list">
              <li className="service">Lorem ipsum dolor</li>
              <li className="service">Pellentesque scelerisque</li>
              <li className="service">Morbi eu sagittis</li>
            </ul>
          </div>
        </div>
        <div className="pricing-content__item">
          <div className="pricing-content--wrap recommanded selected">
            <div className="type">
              <span>Gold</span>
            </div>
            <div className="amount">
              <span>$128</span>
              <sub>/ mon</sub>
            </div>
            <div className="btn-div">
              <a href="#" className="btn">
                Free Trial
              </a>
            </div>
            <ul className="services-list">
              <li className="service">Lorem ipsum dolor</li>
              <li className="service">Pellentesque scelerisque</li>
              <li className="service">Morbi eu sagittis</li>
              <li className="service">Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
        <div className="pricing-content__item">
          <div className="pricing-content--wrap recommanded">
            <div className="type">
              <span>Platinum</span>
            </div>
            <div className="amount">
              <span>$256</span>
              <sub>/ mon</sub>
            </div>
            <div className="btn-div">
              <a href="#" className="btn">
                Free Trial
              </a>
            </div>
            <ul className="services-list">
              <li className="service">Lorem ipsum dolor</li>
              <li className="service">Pellentesque scelerisque</li>
              <li className="service">Morbi eu sagittis Lorem, ipsum.</li>
              <li className="service">Morbi eu Lorem ipsum sit.</li>
              <li className="service">Morbi eu sagittis Lorem.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
