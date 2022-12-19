import "./About.css";
const About = () => {
    return(
        <div id="about">
            <h1>About</h1>
            <div className="layout blob"></div>
            <div className="container">
                <div className="aboutme">
                        <p>I am a Proficient and passion driven Web Developer with years of experience in website development.I build very nice websites using both frontend and backend technologies.I write efficient and non-redundant lines of code that ensures great user experience.</p>
                </div>
                <div className="skills">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vanilla Javascript</li>
                        <li>Reactjs/React Context/React Redux</li>
                        <li>Vuejs</li>
                        <li>Nodejs</li>
                        <li>Expressjs</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Responsive Design</li>
                        <li>Deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;