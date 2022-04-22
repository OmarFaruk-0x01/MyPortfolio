import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import AnimatedCharacters from "../../Texts/AnimatedText";
import ImagePrespective from "./../../Image/ImagePrespective";

const TEXTS = [
  "Web Designer",
  "Cross-Platform Developer",
  "Junior Developer",
  "Front-End Developer",
  "Python Dev",
];

const HomeSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-content--left">
          <ImagePrespective reverse={true}>
            <motion.div
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="home-content--left__img"
            >
              <div
                className="img"
                style={{
                  filter: "grayscale(100%)",
                  backgroundImage: "url('/imgs/pp.jpeg')",
                }}
              ></div>
            </motion.div>
          </ImagePrespective>
        </div>
        <div className="home-content--right">
          <h4>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.stiff}
            />
          </h4>
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
            initial={"hidden"}
            animate={"visible"}
          >
            <AnimatedCharacters text="Omar Faruk" type="h1" />
            <AnimatedCharacters
              text=" I am a front-end developer. I have been working for one year in this
            field. My specialties are React js and React Native. I have done
            several projects. The other specialty I am self though developer. I
            love to code."
              type="p"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, transition: { staggerChildren: 0.4 } }}
            className="home-content--right__btns"
          >
            <motion.a
              initial={{
                opacity: 0,
                x: "-200%",
              }}
              animate={{
                opacity: 1,
                x: "0px",
                transition: {
                  duration: 0.3,
                },
              }}
              download={true}
              href="/OmarFaruk_Resume.pdf"
              className="home-content--right__btn btn-left"
            >
              Download CV
            </motion.a>

            <Link href={"/contact"}>
              <motion.a
                style={{ cursor: "pointer" }}
                initial={{
                  opacity: 0,
                  top: "-200%",
                }}
                animate={{
                  opacity: 1,
                  top: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="home-content--right__btn btn-right"
              >
                Contact
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
