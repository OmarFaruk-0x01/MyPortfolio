import { motion } from "framer-motion";
import { FadeIn } from "../../../Constents/AnimationVarients";

const CertificatesSection = () => {
  return (
    <motion.section
      variants={FadeIn}
      animate={"visible"}
      exit={"hidden"}
      initial={"hidden"}
      className="certificates"
    >
      <div className="section-header">
        <span>Certificates</span>
      </div>
      <div className="certificates-list">
        <a
          href="https://www.coursera.org/account/accomplishments/verify/7MYTZ4EKPTCS"
          target="_blank"
          className="certificate"
        >
          <div className="certificate_img">
            <img src="imgs/react.png" alt="" />
          </div>
          <div className="certificate_dics">
            <h2 className="title">Front-End Web Development with React</h2>
            <h4 className="id">Membership ID: 7MYTZ4EKPTCS</h4>
            <span className="date">12 September 2020</span>
          </div>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/3TE48RJ2FVQN"
          className="certificate"
          target="_blank"
        >
          <div className="certificate_img">
            <img src="imgs/office.png" alt="" />
          </div>
          <div className="certificate_dics">
            <h2 className="title">
              Introduction to Computers and Office Productivity Software
            </h2>
            <h4 className="id">Membership ID: 3TE48RJ2FVQN</h4>
            <span className="date">29 October 2020</span>
          </div>
        </a>
        <a
          href="https://www.udemy.com/certificate/UC-3a2b750e-49c4-4615-bb5f-2dbf438bd540/"
          target="_blank"
          className="certificate"
        >
          <div className="certificate_img">
            <img src="imgs/cyber.png" alt="" />
          </div>
          <div className="certificate_dics">
            <h2 className="title">
              Ethical Hacking/Penetration Testing & Bug Bounty Hunting v2
            </h2>
            <h4 className="id">
              Membership ID: UC-3a2b750e-49c4-4615-bb5f-2dbf438bd540
            </h4>
            <span className="date">3 June 2021</span>
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
