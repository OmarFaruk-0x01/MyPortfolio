const ServicesSection = () => {
  return (
    <section className="services">
      <div className="section-header">
        <span>What I Do</span>
      </div>
      <div className="services-content">
        <div className="services-content__service">
          <div className="icon">
            <i className="linecons linecons-display"></i>
          </div>
          <div className="text">
            <h2>Front-End Design</h2>
            <p>
              My Specialty is Front-End Design. I design responsive websites and
              mobile apps. My Core Technology is HTML, CSS, ScSS, Vanilla Js,
              React Js, React Native.
            </p>
          </div>
        </div>
        <div className="services-content__service">
          <div className="icon">
            <i className="linecons linecons-phone"></i>
          </div>
          <div className="text">
            <h2>Cross-Platform Development</h2>
            <p>
              I have expert knowledge of creating CrossPlatfrom Android/IOS apps
              in a single code base. In this field, I use React Native as a Core
              Technology.
            </p>
          </div>
        </div>
        <div className="services-content__service">
          <div className="icon">
            <i className="linecons linecons-settings"></i>
          </div>
          <div className="text">
            <h2>REST-Full API</h2>
            <p>
              I am also well-skilled to make restful API. Mostly, I use
              Flask(Python) to make any restful API. Python is the first
              programming language I have learned. I have two years of
              experience in Python. I also use Node Js as a backend programming
              language. I have a good catch in MySQL and PostgreSQL also.
            </p>
          </div>
        </div>
        <div className="services-content__service">
          <div className="icon">
            <i className="linecons linecons-key"></i>
          </div>
          <div className="text">
            <h2>Security Research</h2>
            <p>
              I am a security researcher on a littler basis. I am learning OWASP
              10 Vulnerabilities and completed a bug-bounty course from Udemy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
