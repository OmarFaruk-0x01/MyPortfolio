const ContactFormSection = () => {
  return (
    <div className="contact">
      <div className="contact-address">
        {/* <div className="contact-address__item">
          <div className="icon">
            <i className="linecons linecons-phone"></i>
          </div>
          <div className="text">
            <h2>+880-161-112-9080</h2>
            <p>
              
            </p>
          </div>
        </div> */}
        <div className="contact-address__item">
          <div className="icon">
            <i className="linecons linecons-location"></i>
          </div>
          <div className="text">
            <h2>Mirpur Dhaka</h2>
            <p>Darussalam Mirpur-1, Dhaka 1216</p>
          </div>
        </div>
        <div className="contact-address__item">
          <div className="icon">
            <i className="linecons linecons-mail"></i>
          </div>
          <div className="text">
            <h2>programmer.omar.dev@gmail.com</h2>
            <p>Contact me for anykind of information</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="section-header">
          <span>How Can I Help You?</span>
        </div>
        <form action="#" className="form">
          <div className="form-group__top">
            <div className="form-group__top--left">
              <div className="form-group">
                <input type="text" placeholder="Fullname" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="form-group__top--right">
              <div
                className="form-group"
                style={{ gridRow: "1/4", gridColumn: 2 }}
              >
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group__bottom">
            <input type="submit" value="Send Message" className="send-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactFormSection;
