import Typed from 'react-typed';
import Contact from './Contact';
import {AiTwotoneHome} from 'react-icons/ai';
import {ImAddressBook} from 'react-icons/im';
import {MdOutlineWork} from 'react-icons/md';
import {GrMail} from 'react-icons/gr';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Home.css";
import AppContext from './AppContext';
import { useContext } from 'react';
const Home = () => {
   const {status, changeStatus} = useContext(AppContext);
    return(
        <div className="home">
           
            <div className="custom-shape-divider-top-1656851961">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            </div>
            <div className="navbar">
                <AnchorLink className='anchorlink' href="#home"><AiTwotoneHome className='navItem navItem1'/></AnchorLink>
                <AnchorLink  className='anchorlink' href="#about"><ImAddressBook className='navItem'/></AnchorLink>
                <AnchorLink  className='anchorlink' href="#portfolio"> <MdOutlineWork className='navItem'/></AnchorLink>
                <GrMail className='navItem' onClick={changeStatus}/>
                {/* <AnchorLink  className='anchorlink' href="#about"><GrMail className='navItem'/></AnchorLink> */}
            </div>
            <div className="bgcolor">
                <div className='name'>
                    <h1>Hello, I'm <span className='fullname'>jamiu ganiyat.</span></h1>
                    <h2>&lt;code&gt;&nbsp;I'm a&nbsp;
                        <Typed 
                         strings={[
                            'Website Developer',
                            'FullStack Developer'
                        ]}
                            typeSpeed={120}
                            backSpeed={50}
                            loop/>
                    &nbsp; &lt;/code&gt;       
                    </h2>
                    <AnchorLink href="#about" className='anchorlink'><div id="btn"><span className="about">About me</span>
                        <div className="btn"></div>
                    </div></AnchorLink>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1656961706">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            {status ? <Contact/> : ""}
        </div>
    )
}

export default Home;