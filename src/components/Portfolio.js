import "./Portfolio.css";
const Portfolio = () => {
    return(
        <div id="portfolio">
            <h1 className="header">Portfolio</h1>
            <div className="collection">
                <div className="wrapper">
                   <img src="./images/img1.jpeg" alt="" className="img"/>
                   <div className="blind">
                       <a href="https://govacc.herokuapp.com/" className="link"><h1>Govac</h1></a>
                       <p>Tour and travel agency</p>
                       <p className="tech">React app</p>
                   </div>
                </div>
                <div className="wrapper">
                   <img src="./images/img2.jpeg" alt="" className="img"/>
                   <div className="blind">
                       <a href="https://govacc.herokuapp.com/" className="link"><h1>Fitness</h1></a>
                       <p>Fitness and Gym</p>
                       <p className="tech">React app</p>
                   </div>
                </div>
                <div className="wrapper">
                   <img src="./images/img3.jpeg" alt="" className="img"/>
                   <div className="blind">
                       <a href="https://govacc.herokuapp.com/" className="link"><h1>Taskify</h1></a>
                       <p>Tasks and appointments tracker</p>
                       <p className="tech">Vue and Nodejs app</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;