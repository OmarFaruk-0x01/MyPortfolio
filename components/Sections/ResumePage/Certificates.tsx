import { motion } from "framer-motion";
import { FadeIn } from "../../../Constents/AnimationVarients";
const CertificatesSection = ({certificates}) => {

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
        {certificates.map((cert) => (
          <a
            key={cert.courseId}
            href={cert.certificatesLink}
            className="certificate"
            target="_blank"
          >
            <span className="certificate_img">
              <img src={cert.featuredImage} alt="" />
            </span>
            <span className="certificate_dics">
              <span className="title">{cert.courseTitle}</span>
              <span className="id">Membership ID: {cert.courseId}</span>
              <span className="date">{cert.courseTime.endDate}</span>
            </span>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default CertificatesSection;

