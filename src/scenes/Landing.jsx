import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import resume from "../assets/Alondra Torres Resume.pdf"
import profileImg from "../assets/profile-image.jpg"

const Landing = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)")
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-12"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              // className="z-10 w-full max-w-[400px] md:max-w-[600px] "
              className="rounded-t-[400px] z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={profileImg}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="rounded-t-[400px] z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={profileImg}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-6xl font-playfair font-semibold text-center md:text-start text-black">Alondra</h1>
          <h2 className="text-xl font-playfair text-center md:text-start  text-red">Full Stack Software Engineer</h2>

          <p className="mt-5 mb-7 text-sm text-center md:text-start">
            Motivated and results-oriented software engineering associate with a blend of leadership skills
            and qualities. A former high school Algebra teacher with the ability to learn new concepts and adapt
            to new working environments.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="rounded-r-sm bg-gradient-rainblue py-0.5 px-0.5 rounded-sm">
            <a href={resume} download
              className="bg-white hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 py-3 font-playfair text-black">
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <a
            className="hover:opacity-50 transition duration-500 pr-4"
            href="https://www.linkedin.com/in/trsalondra/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8"></FontAwesomeIcon>
          </a>

          <a
            className="hover:opacity-50 transition duration-500"
            href="https://github.com/trsalondra"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8"></FontAwesomeIcon>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
