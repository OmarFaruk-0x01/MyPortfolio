import { motion } from "framer-motion";
import { FadeIn, SlideFromLeft } from "../../../Constents/AnimationVarients";

const QualificationsSection = () => {
  return (
    <motion.section
      variants={FadeIn}
      animate={"visible"}
      transition={{ staggerChildren: 0.5 }}
      exit={"hidden"}
      initial={"hidden"}
      className="qualifications"
    >
      <motion.div
        variants={FadeIn}
        animate={"visible"}
        transition={{ staggerChildren: 0.5 }}
        exit={"hidden"}
        initial={"hidden"}
        className="edu"
      >
        <div className="section-header">
          <span>Education</span>
        </div>
        <div className="items">
          <div className="items--item border-bottom">
            <div className="time">
              <span className="year">2022 - Present</span>
              <span className="university">Govt. Graphics Arts Institute</span>
            </div>
            <h2 className="title">Computer Technology</h2>
            <p>Diploma in Computer 20-21</p>
          </div>
          <div className="items--item">
            <div className="time">
              <span className="year">2019</span>
              <span className="university">
                Darussalam Govt. Secondary School
              </span>
            </div>
            <h2 className="title">Secondary School Certificate</h2>
            <p>SSC from science (GPA 4.44)</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={SlideFromLeft}
        animate={"visible"}
        transition={{ staggerChildren: 0.5 }}
        exit={"hidden"}
        initial={"hidden"}
        className="exp"
      >
        <div className="section-header">
          <span>Experience</span>
        </div>
        <div className="items">
          <div className="items--item border-bottom">
            <div className="time">
              <span className="year">2018 - Current</span>
              <span className="university">Pure Fresher</span>
            </div>
            <h2 className="title">Self taught</h2>
            <p>
              <ul>
                <li>Worked for real-life projects</li>
                <li>Self Learning skill</li>
                <li>Problem Solving at Hacker Rank</li>
              </ul>
            </p>
          </div>
          {/* <div className="items--item border-bottom">
            <div className="time">
              <span className="year">2008</span>
              <span className="university">Locost Accessories</span>
            </div>
            <h2 className="title">Senior UI/UX Designer</h2>
            <p>
              Duis posuere, quam non imperdiet egestas, eros enim mattis mauris,
              in posuere lacus arcu quis felis. Etiam interdum erat non enim
              venenatis fermentum.
            </p>
          </div>
          <div className="items--item">
            <div className="time">
              <span className="year">2007</span>
              <span className="university">Sagebrush</span>
            </div>
            <h2 className="title">Junior UI/UX Designer</h2>
            <p>
              Duis posuere, quam non imperdiet egestas, eros enim mattis mauris,
              in posuere lacus arcu quis felis. Etiam interdum erat non enim
              venenatis fermentum.
            </p>
          </div> */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default QualificationsSection;
