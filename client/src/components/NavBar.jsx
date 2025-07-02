import './NavBar.css'
import { IoChatbox, IoInformation, IoInformationCircle } from "react-icons/io5";
import { GoHistory } from "react-icons/go";

function NavBar() {

  return (
    <>
        <div className = "nav-container">
            <ul className = "nav-options">
               <li><IoInformationCircle></IoInformationCircle>About KnotBot</li>
               <li><IoChatbox></IoChatbox>Chat With KnotBot</li>
               <li><GoHistory></GoHistory>Chat History</li>
            </ul>
        </div>
    </>
  )
}

export default NavBar