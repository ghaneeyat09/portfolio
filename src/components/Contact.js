import "./Contact.css";
import {TiTimes} from "react-icons/ti";
import AppContext from './AppContext';
import { useContext } from 'react';
const Contact = () => {
    const {changeStatus} = useContext(AppContext);
        return(
            <div className="contact">
                 <div className="contactWrapper">
                     <TiTimes className="close" onClick={changeStatus}/>
                     <div className="contactContent">
                        <h1>get in touch</h1>
                        <h3>have a question or want to work together?</h3>
                        <a href="mailto:jamiuganeeyat@gmail.com">Drop a message</a>
                     </div>
                 </div>
            </div>
        )
}
export default Contact;