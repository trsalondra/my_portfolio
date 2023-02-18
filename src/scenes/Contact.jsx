import LineGradient from "../components/LineGradient"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    console.log("~ e", e)
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contact" className="contact py-24 mb-16">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-blue">
            CONTACT <span className="text-red">ME</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col justify-center items-start"
        >
          <div className="h-12 flex items-center text-2xl">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 pr-4 text-blue"></FontAwesomeIcon>
            <h3 className="text-zinc-700">Alondra Torres</h3>
          </div>

          <div className="h-12 flex items-center text-2xl">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 pr-4 text-blue"></FontAwesomeIcon>
            <span className="text-zinc-700">trsalondra@gmail.com</span>
          </div>

          <div className="h-12 flex items-center text-2xl">
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 pr-4 text-blue"></FontAwesomeIcon>
            <span className="text-zinc-700">(214) 916 - 6598</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
            className="text-black"
          >
            <input
              className="w-full placeholder-opaque-black p-3 rounded-lg  border-dark-grey border-2"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full placeholder-opaque-black p-3 mt-5 rounded-lg   border-dark-grey border-2"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full placeholder-opaque-black p-3 mt-5 rounded-lg  border-dark-grey border-2"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <div className="rounded-r-sm bg-gradient-rainblue py-0.5 px-0.5 rounded-sm mt-1">
              <button
                className="bg-white hover:text-red transition duration-500 flex items-center justify-center px-10 py-3 font-playfair w-full text-zinc-700"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
