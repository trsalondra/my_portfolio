import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"

const Skill = ({ title, icon }) => {
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
      <div className="flex justify-center text-zinc-800">
        {icon}
      </div>
      <p className="text-2xl mt-3">
        {title}
      </p>
    </motion.div>
  )
}

const MySkills = () => {
  return (
    <section id="skills" className=" py-24 lg:p-24">
      {/* HEADER */}
      <div className="pb-4 md:flex md:justify-between md:gap-16">
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
            <span className="text-red">MY </span>SKILLS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>

        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center">
        <Skill title="HTML5" icon={<FontAwesomeIcon icon={faHtml5} className="h-12 w-12"></FontAwesomeIcon>} />

        <Skill title="CSS3" icon={<FontAwesomeIcon icon={faCss3Alt} className="h-12 w-12"></FontAwesomeIcon>} />

        <Skill title="JavaScript" icon={<FontAwesomeIcon icon={faSquareJs} className="h-12 w-12"></FontAwesomeIcon>} />

        <Skill title="Node.js" icon={<FontAwesomeIcon icon={faNodeJs} className="h-12 w-12"></FontAwesomeIcon>} />

        <Skill title="React.js" icon={<FontAwesomeIcon icon={faReact} className="h-12 w-12"></FontAwesomeIcon>} />

        <Skill title="Express.js" icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>} />

        <Skill title="MongoDB" icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg>} />
      </div>

    </section>
  )
}

export default MySkills
