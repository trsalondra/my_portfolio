import React from "react"
import home1 from "../img/home1.png"

import styled from "styled-components"

const AboutSection = () => {
    return (
        <StyledAboutSection>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>

                    <StyledHide>
                        <h2>your <span>Dreams</span></h2>
                    </StyledHide>

                    <StyledHide>
                        <h2>come true</h2>
                    </StyledHide>
                </div>

                <p>
                    Motivated and results-oriented junior software engineering associate with a blend of leadership skills
                    and qualities. A former high school Algebra teacher with the ability to learn new concepts and adapt
                    to new working environments.
                </p>

                <button>Download Resume</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="Head Shot of Alondra Torres" />
            </StyledImage>
            
        </StyledAboutSection>
    )
}

const StyledAboutSection = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    color: white;
    background-color: black;
`
const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

`

const StyledHide = styled.div`
    overflow: hidden;
`

export default AboutSection