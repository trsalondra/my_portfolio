import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className=" bg-dark-grey p-6">
      <div className="w-10/12 mx-auto md:flex md:justify-between">
        <div className="text-center md:text-start">
          <div>
            <a
              className="hover:opacity-50 transition duration-500 pr-4"
              href="https://www.linkedin.com/in/trsalondra/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 text-white"></FontAwesomeIcon>
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/trsalondra"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-white"></FontAwesomeIcon>
            </a>
          </div>

          <p className="font-playfair font-semibold text-lg text-white">
            Alondra Torres
          </p>
        </div>

        <div className="text-center md:flex md:justify-end md:items-center">
          <p className="font-opensans text-sm text-white">
            ©2023 trsalondra. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
