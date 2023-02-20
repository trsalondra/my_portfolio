import LineGradient from "../components/LineGradient"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import spacerace from "../assets/space-race.jpeg"

const Project = ({ title, image, tech, description, link, glink }) => {
  return (
    <motion.div
      className="text-center p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div>
        <a href={link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="project image" className="overflow-hidden rounded-lg" />
        </a>

        <div className="flex justify-between items-center mt-1">
          <div className="text-left">
            <p className="text-2xl font-playfair text-zinc-800">{title}</p>
            <p>{tech}</p>
          </div>

          <div>
            <a href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50 transition duration-500" >
              <FontAwesomeIcon icon={faLink} className="w-6 h-6 cursor-pointer pr-3"></FontAwesomeIcon>
            </a>
            <a href={glink}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50 transition duration-500" >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 cursor-pointer"></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <p className="mt-1 text-black text-left">{description}</p>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 xl:p-24">
      {/* HEADER */}
      <div className="pb-4 mb:m-8 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >

          <p className="font-playfair font-semibold text-4xl text-blue">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </motion.div>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <div
          className="lg:grid lg:grid-cols-2"
        >
          <Project title="Space Race"
            image={spacerace}
            tech="HTML, CSS, JavaScript"
            description="Two player game, where two players take turns "
            link="https://trsalondra.github.io/space_race/"
            glink="https://github.com/trsalondra/space_race"
          />

          {/* <Project title="Space Race"
            image={spacerace}
            tech="HTML, CSS, JavaScript"
            description="Two player game, where two players take turns "
            link="https://trsalondra.github.io/space_race/"
            glink="https://github.com/trsalondra/space_race"
          />

          <Project title="Space Race"
            image={spacerace}
            tech="HTML, CSS, JavaScript"
            description="Two player game, where two players take turns "
            link="https://trsalondra.github.io/space_race/"
            glink="https://github.com/trsalondra/space_race"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Projects
