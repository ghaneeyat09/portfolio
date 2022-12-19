import "./Portfolio.css";
// import logo from "../logo.svg"
const Portfolio = () => {
    return(
        <div id="portfolio">
            <h1 className="header">Portfolio</h1>
            <div className="collection">
                <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/img1.jpg"} alt="" className="img"/>
                   <div className="blind">
                       <a href="https://alyusrohmodestwears.com/" className="link"><h1 className="alyusroh">Alyusroh modest wears</h1></a>
                       <p>Fashion Brand</p>
                       <p className="tech">MERN stack</p>
                   </div>
                </div>
                <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/img4.jpg"} alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/goVacation/" className="link"><h1>Govac</h1></a>
                       <p>Tour and travel agency</p>
                       <p className="tech">React app</p>
                   </div>
                </div>
                <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/img2.jpeg"} alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/fitness/" className="link"><h1>Fitness</h1></a>
                       <p>Fitness and Gym</p>
                       <p className="tech">React app</p>
                   </div>
                </div>
                <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/foodWallpaper.jpg"}alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/fudjungle/" className="link"><h1>Fudjungle</h1></a>
                       <p>Restaurant/Food</p>
                       <p className="tech">Vue app</p>
                   </div>
                </div>
                {/* <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/img3.jpeg"}alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/fudjungle/" className="link"><h1>Taskify</h1></a>
                       <p>Todo/Task Management</p>
                       <p className="tech">Vue and Node app</p>
                   </div>
                </div> */}
                <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/perfume.jpg"}alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/besnik/" className="link"><h1>Besnik.</h1></a>
                       <p>perfume(random figma design gotten from the net)</p>
                       <p className="tech">HTML & CSS</p>
                   </div>
                </div>
                {/* <div className="wrapper height">
                   <img src={process.env.PUBLIC_URL + "/images/blog.jpg"}alt="" className="img"/>
                   <div className="blind">
                       <a href="https://ghaneeyat09.github.io/fudjungle/" className="link"><h1>Afriblog</h1></a>
                       <p>Blogging App</p>
                       <p className="tech">React, Node and MySQL App</p>
                   </div>
                </div> */}
                
            </div>
        </div>
    )
}

export default Portfolio;