import React from "react"
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"

const ProjectsSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>Quality</span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Efficient</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Efficient</h3>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Efficient</h3>
                        </div>
                    </div>

                    <div className="image">
                        <img src={home2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection